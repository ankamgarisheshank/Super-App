from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
import uvicorn

app = FastAPI(title="SuperApp API Gateway", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Service URLs (These would normally come from environment variables or service discovery)
SERVICES = {
    "auth": "http://auth-service:8001",
    "user": "http://user-service:8002",
    "ecommerce": "http://ecommerce-service:8003",
    "food": "http://food-service:8004",
    "healthcare": "http://healthcare-service:8005",
    "local": "http://local-service:8006",
    "ride": "http://ride-service:8007",
}

@app.get("/")
async def root():
    return {"message": "Welcome to SuperApp API Gateway"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Dynamic Routing / Reverse Proxy
@app.api_route("/{service_path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def proxy_request(request: Request, service_path: str):
    service_name = service_path.split("/")[0]
    if service_name not in SERVICES:
        raise HTTPException(status_code=404, detail="Service not found")
    
    target_url = f"{SERVICES[service_name]}/{service_path}"
    
    async with httpx.AsyncClient() as client:
        try:
            # Extract headers, body, and params
            headers = dict(request.headers)
            # Remove host header to avoid issues with target service
            headers.pop("host", None)
            
            body = await request.body()
            params = request.query_params
            
            response = await client.request(
                method=request.method,
                url=target_url,
                headers=headers,
                data=body,
                params=params,
                timeout=10.0
            )
            
            return response.json()
        except httpx.RequestError as exc:
            raise HTTPException(status_code=502, detail=f"Error connecting to service: {exc}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

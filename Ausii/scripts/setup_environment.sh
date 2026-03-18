#!/bin/bash
echo "Setting up SuperApp environment..."
pip install fastapi uvicorn pydantic motor
npm install -g @angular/cli
echo "Done."

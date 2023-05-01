#!/bin/sh
# PATH += which python
# python -m uvicorn main:app --reload
uvicorn  main:app --host 0.0.0.0 --port 8080 --workers 1

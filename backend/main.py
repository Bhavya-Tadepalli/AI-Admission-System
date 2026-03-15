from fastapi import FastAPI
from routes import user_routes, application_routes, file_routes

app = FastAPI(title="AI Admissions Backend")

app.include_router(user_routes.router)
app.include_router(application_routes.router)
app.include_router(file_routes.router)

@app.get("/")
def health_check():
    return {"message": "AI Admissions Backend Running with MongoDB"}
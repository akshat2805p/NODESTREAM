<div align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=40&pause=1000&color=0FFF50&center=true&vCenter=true&width=600&lines=Nodestream;Visual+Pipeline+Builder;Build+Flows+Visually" alt="Typing SVG" /></a>

  <p align="center">
    <strong>NodeStream — A Powerful, Node-Based Visual Pipeline Builder</strong>
    <br />
    <br />
    <a href="https://reactjs.org/">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://reactflow.dev/">
      <img src="https://img.shields.io/badge/React_Flow-FF0072?style=for-the-badge&logo=react&logoColor=white" alt="React Flow" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    </a>
  </p>
</div>

<br />

## ⚡ Overview

NodeStream is a modern, visual interface designed for constructing complex data pipelines. Built with React and FastAPI and powered by React Flow, it provides a canvas where users can drag, drop, and connect processing nodes to create functional workflows.

---

## 🚀 Key Features

- Drag-and-Drop interface for building pipelines visually
- Support for LLM Nodes, API Call Nodes, Transformation Nodes, File Save, Filters, Notes, and more
- Real-time DAG validation via backend

---

## 🛠️ Getting Started

These instructions will get the project running locally (frontend + backend).

### Prerequisites

- Node.js (LTS) and npm
- Python 3.8+

### Repository layout

This repository has a frontend (React) app in `frontend/` and a backend (FastAPI) app in `backend/`.

### Installation — Backend

1. Create and activate a Python virtual environment (recommended):

```sh
python -m venv .venv
source .venv/bin/activate  # macOS / Linux
.\.venv\Scripts\activate   # Windows (PowerShell)
```

2. Install backend dependencies:

```sh
pip install fastapi uvicorn
```

3. Run the backend server (development):

```sh
uvicorn main:app --reload --port 8000 --host 127.0.0.1
```

The backend will listen on http://127.0.0.1:8000 by default.

### Installation — Frontend

1. Install frontend dependencies:

```sh
cd frontend
npm install
```

2. Configure API URL for development (optional):

Create `frontend/.env` with the following content to point the frontend to the backend (an example is provided at `frontend/.env.example`):

```
REACT_APP_API_URL=http://127.0.0.1:8000
```

If `REACT_APP_API_URL` is not set, the frontend will call the same origin (useful in deployments where frontend and backend are served together).

3. Run the frontend:

```sh
npm start
```

Open http://localhost:3000 to view the app.

---

## 📂 Project Structure

```text
frontend/            # React app
backend/             # FastAPI backend
README.md            # This file
```

---

## 🔧 Scripts

- `npm start` (frontend development)
- `npm run build` (frontend production build)

---

## Notes & Recommendations

- The backend currently enables CORS for development. For production, restrict allowed origins in `backend/main.py`.
- Add a `requirements.txt` in `backend/` (e.g. `fastapi`, `uvicorn`) and a `frontend/.env` in `.gitignore` for secrets.
- Consider adding CI (GitHub Actions) to run linting and builds automatically.


<!-- End of README -->
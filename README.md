# To-Do App: Cloud Application Development Project

This repository contains a **To-Do Application** demonstrating modern cloud application development concepts, including **Docker**, **CI/CD Pipelines**, and **NGINX Load Balancing**. The project was built as part of the **CCS3312 - Cloud Application Development** course.

## Features
- **Frontend**: A user-friendly interface to manage tasks.
- **Backend**: A RESTful API built with Node.js and Express.js.
- **Dockerized Setup**: Both frontend and backend are containerized.
- **GitLab CI/CD Pipelines**: Automated build and deployment workflows.
- **NGINX Load Balancing**: Distributes traffic across backend instances.
- **Scalable Architecture**: Prepared for scaling using containers.

---

## Project Structure
```plaintext
.
├── backend/                # Backend code
│   ├── app.js              # Main Node.js server
│   ├── tasks.json          # Persistent task storage
│   ├── Dockerfile          # Dockerfile for backend
├── frontend/               # Frontend code
│   ├── index.html          # Main HTML file
│   ├── style.css           # Styling for the To-Do App
│   ├── script.js           # Frontend functionality
│   ├── Dockerfile          # Dockerfile for frontend
├── nginx/                  # NGINX configuration
│   ├── nginx.conf          # NGINX load balancing configuration
├── docker-compose.yml      # Compose file for multi-container setup
├── .gitlab-ci.yml          # GitLab CI/CD pipeline configuration
└── README.md               # Project documentation
```

---

## How to Run the Application

### Prerequisites
- Docker and Docker Compose installed.
- Node.js installed (if testing backend locally).

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Lavanyacheshani/Docker-dev.git
   cd Docker-dev
   ```

2. **Start the application**:
   ```bash
   docker-compose up
   ```

3. **Access the application**:
   - **Frontend**: [http://localhost:8080](http://localhost:8080)
   - **Backend API**: [http://localhost:3000](http://localhost:3000)

---




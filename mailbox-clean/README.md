# 📦 Mailbox & LifeScan Appointment System

## 🚀 Overview

Full-stack web application for managing:

* Customer messages
* LifeScan fingerprinting appointments
* Admin dashboard

Built with modern technologies and deployed using Docker.

---

## 🛠️ Tech Stack

**Frontend**

* React (TypeScript)
* Vite
* CSS / Tailwind (if used)

**Backend**

* Spring Boot
* REST API
* JPA / Hibernate

**Database**

* H2 (dev) / ready for MySQL

**Infrastructure**

* Docker
* Redis (caching ready)

---

## ✨ Features

* 📩 Contact form (stores messages)
* 📅 Appointment booking system
* ⏰ Time slot logic (business hours)
* 🔐 Admin login (backend-secured)
* 📊 Admin dashboard (view messages + appointments)
* 🚫 Prevents Sunday bookings
* 🐳 Dockerized backend + Redis

---

## 🔧 How to Run

### Backend (Docker)

```bash
cd spring-boot-backend
docker compose up --build
```

Backend runs on:

```
http://localhost:8080
```

---

### Frontend

```bash
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔑 Admin Login

```
Username: admin
Password: password123
```

---

## 📡 API Endpoints

* `GET /api/appointments`
* `POST /api/appointments`
* `GET /api/contact`
* `POST /api/contact`
* `POST /api/admin/login`

---

## 📌 Future Improvements

* JWT Authentication
* Prevent double booking
* Redis caching for performance
* AWS deployment
* Email/SMS notifications

---

## 👨‍💻 Author

Shlomo Elguera

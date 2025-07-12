# MitraMela

[Launch Project](https://mitramela.onrender.com/)
social chatting application with real‑time messaging and video calling.

---

## ✨ Overview

MitraMela is a social chat platform built with the MERN (MongoDB, Express, React, Node.js) stack and the GetStream API for chat and video functionality. It leverages TanStack Query for efficient server‑state management and delivers a fast, responsive user experience.

Key highlights:

* 🌐 Real‑time text chat powered by GetStream
* 📹 One‑to‑one and group video calling
* 🔐 Secure JWT authentication with protected routes
* 🤝 Onboarding flow with user profiles and friend system
* ⚡ 32 customizable UI themes
* 🚨 Error Handling (Frontend & Backend)
* 🚀 Deployment On Render
* 🎯 Built with Scalable Technologies like Stream
* ⏳ And much more!

---

## 🚀 Technologies

* **Backend:** Node.js, Express, MongoDB, Mongoose
* **Frontend:** React, Vite, Tailwind CSS
* **Server State Management:** TanStack Query
* **Chat & Video:** GetStream Chat
* **Auth:** JWT
* **Deployment:** Render

---

## 📋 Features

* **User Authentication:** Signup, login, JWT‑based session.
* **Onboarding Flow:** Complete profile setup with avatar selection.
* **Friends System:** Send, accept, and track friend requests.
* **Real‑Time Chat:** 1:1 messaging with typing indicators and read receipts.
* **Video Calling:** In‑browser video calls via GetStream Video.
* **UI Themes:** 32 dark/light themes toggleable in settings.
* **Protected Routes:** Access control for authenticated users.
* **API Testing:** Endpoints built and tested for reliability.

---

3. **.env Setup**

   * Create a `.env` file in `backend/`:

     ```text
     PORT=5001
     MONGO_URI=<your_mongo_connection_string>
     JWT_SECRET_KEY=<your_jwt_secret>
     STREAM_API_KEY=<your_stream_api_key>
     STREAM_API_SECRET=<your_stream_api_secret>
     ```

   * create `.env` in `frontend/` (for Vite):

     ```text
     VITE_STREAM_API_KEY=your_stream_api_key
     ```

4. **Run locally**

   * **Run Backend**:   
    ```bash
    cd backend
    npm install
    npm run dev
   ```
   * **Frontend**:
   ```bash
    cd frontend
    npm install
    npm run dev
   ```

Built with ♥ by Kathan Kadiya

# MERN Stack AI Chatbot 🤖

A full-stack, real-time chatbot application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated with the Google Gemini API. The app features user authentication via email OTP and allows users to create, manage, and delete their conversations.

## 🚀 Live Demo

**View the live application here:** [**https://chatfrontend-six-sigma.vercel.app/**](https://chatfrontend-six-sigma.vercel.app/)

## ✨ Features

* **Real-time AI Chat:** Get instant and accurate responses from the Google Gemini API (proxied securely through the backend).
* **Secure User Authentication:** Employs a secure login system using email-based OTP (One-Time Password) verification sent via the Brevo API.
* **JSON Web Tokens (JWT):** User sessions are managed securely using JWTs.
* **Full Conversation Management:**
    * **Chat History:** All conversations are saved to the user's account and can be accessed from a persistent sidebar.
    * **Create & Delete:** Users can create new, separate chat sessions or delete old ones with a single click.
    * **Persistent Messages:** All messages (questions and answers) are saved in the MongoDB database.
* **Polished User Interface (UI/UX):**
    * **Responsive Design:** The application is fully responsive and works seamlessly on both desktop and mobile devices, thanks to Tailwind CSS.
    * **Auto-Scrolling Chat:** The chat window automatically scrolls to the bottom when a new message is sent or received.

## 🛠️ Tech Stack

**Frontend:**
* React.js
* Vite
* Tailwind CSS
* Axios
* React Hot Toast
* React Markdown

**Backend:**
* Node.js
* Express.js
* MongoDB (with Mongoose)
* JSON Web Token (JWT)
* **Brevo API** (for transactional emails)
* `cors`, `dotenv`

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

* Node.js (v18 or later)
* `npm` or `yarn`
* MongoDB (a local instance or a connection string from MongoDB Atlas)
* **A Brevo Account:**
    * A Brevo API Key (v3)
    * A verified Sender Email
* **A Google AI API Key:** (from [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/Sneharaj7645653/chat-bot.git
cd chat-bot
```

### 2. Backend Setup

```bash
# Move into the backend directory
cd backend

# Install dependencies
npm install
```

Create a file named `.env` in the backend directory and add the following variables:

```ini
PORT=8000
Db_url=YOUR_MONGODB_CONNECTION_STRING
Jwt_sec=YOUR_JWT_SECRET_KEY
Activation_sec=YOUR_OTP_VERIFICATION_SECRET_KEY

# Brevo API credentials
BREVO_API_KEY=YOUR_BREVO_V3_API_KEY
SENDER_EMAIL=YOUR_BREVO_VERIFIED_SENDER_EMAIL

# Google Gemini API Key
GEMINI_API_KEY=YOUR_GOOGLE_AI_API_KEY
```

### 3. Frontend Setup

```bash
# Move into the frontend directory from the root
cd frontend

# Install dependencies
npm install
```

Create a file named `.env.local` in the frontend directory and add the following:

```ini
VITE_SERVER=http://localhost:8000
```

### 4. Run the Application

You'll need two separate terminals to run both the frontend and backend servers.

In **Terminal 1 (from backend folder):**
```bash
npm run dev
# Server will be running on http://localhost:8000
```

In **Terminal 2 (from frontend folder):**
```bash
npm run dev
# App will be running on http://localhost:5173
```

---

## 🔐 API Routes

All API routes are prefixed with `/api`.

### User Routes

| Prefix | Method | Endpoint | Protection | Description |
| :--- | :--- | :--- | :--- | :--- |
| /api/user | POST | /login | Public | Sends an OTP to the user's email via Brevo. |
| /api/user | POST | /verify | Public | Verifies the OTP and returns a JWT token. |
| /api/user | GET | /me | Private | Gets the logged-in user's profile information. |

### Chat Routes

| Prefix | Method | Endpoint | Protection | Description |
| :--- | :--- | :--- | :--- | :--- |
| /api/chat | POST | /new | Private | Creates a new, empty chat session. |
| /api/chat | GET | /all | Private | Gets all chat sessions for the logged-in user. |
| /api/chat | POST | /:id | Private | Adds a new conversation (question & answer) to a specific chat. |
| /api/chat | GET | /:id | Private | Gets all conversations (messages) for a specific chat. |
| /api/chat | DELETE | /:id | Private | Deletes a specific chat session and all its messages. |


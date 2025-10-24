# MERN Stack AI Chatbot 🤖

A full-stack, real-time chatbot application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated with the Google Gemini API. The app features user authentication via email OTP and allows users to create, manage, and delete their conversations.

✨ Features
* Real-time AI Chat: Get instant and accurate responses from the Google Gemini API for a natural, conversational experience.
* Secure User Authentication: Employs a secure login system using email-based OTP (One-Time Password) verification and JSON Web Tokens (JWT) for session management.
* Full Conversation Management:
    * Chat History: All conversations are saved to the user's account and can be accessed from a persistent sidebar.
    * Create & Delete: Users can create new, separate chat sessions or delete old ones with a single click.
    * Persistent Messages: All messages (questions and answers) are saved in the MongoDB database, allowing users to pick up where they left off.
* Polished User Interface (UI/UX):
    * Responsive Design: The application is fully responsive and works seamlessly on both desktop and mobile devices, thanks to Tailwind CSS.
    * Auto-Scrolling Chat: The chat window automatically scrolls to the bottom when a new message is sent or received, keeping the latest content in view.

## 🛠️ Tech Stack

**Frontend:**
* React.js
* Vite
* Axios
* React Hot Toast
* React Markdown
* Tailwind CSS

**Backend:**
* Node.js
* Express.js
* MongoDB (with Mongoose)
* JSON Web Token (JWT)
* Nodemailer (for OTPs)
* `cors`, `dotenv`

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

* Node.js (v18 or later)
* `npm` or `yarn`
* MongoDB (a local instance or a connection string from MongoDB Atlas)
* A Google AI API Key (from [Google AI Studio](https://aistudio.google.com/))
* A Gmail "App Password" (for sending OTPs)

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/your-project-name.git](https://github.com/your-username/your-project-name.git)
cd your-project-name
```


### 2. Backend Setup
#### Move into the backend directory
```
cd backend
```

#### Install dependencies
```
npm install
```

* Create a file named .env in the backend directory and add the following variables:
```
PORT=8000
Db_url=YOUR_MONGODB_CONNECTION_STRING
Jwt_sec=YOUR_JWT_SECRET_KEY
Activation_sec=YOUR_OTP_VERIFICATION_SECRET_KEY

# Gmail/Nodemailer credentials for sending OTPs
Gmail=your-email@gmail.com
Password=your-16-digit-gmail-app-password
```

### 2. Frontend Setup
```
# Move into the frontend directory from the root
cd frontend

# Install dependencies
npm install
```
* Create a file named .env.local in the frontend directory and add the following:

```
VITE_SERVER=http://localhost:8000
```

### 4.Run the Application

You'll need two separate terminals to run both the frontend and backend servers.

```
npm run dev
# Server will be running on http://localhost:8000
```

In Terminal 2 (from frontend folder):
```
npm run dev
# App will be running on http://localhost:5173
```


## 🔐 API Routes
All API routes are prefixed with /api.


### User Routes
Prefix: `/api/user`
| Method | Endpoint | Protection | Description |
| :--- | :--- | :--- | :--- |
| POST | /login | Public | Sends an OTP to the user's email. |
| POST | /verify | Public | Verifies the OTP and returns a JWT token. |
| GET | /me | Private | Gets the logged-in user's profile information. |


### Chat Routes
Prefix: `/api/user`
| Method | Endpoint | Protection | Description |
| :--- | :--- | :--- | :--- |
| POST | /new | Private | Creates a new, empty chat session. |
| GET | /all | Private | Gets all chat sessions for the logged-in user. |
| POST | /:id | Private | Adds a new conversation (question & answer) to a specific chat. |
| GET | /:id | Private | Gets all conversations (messages) for a specific chat. |
| DELETE | /:id | Private | Deletes a specific chat session and all its messages. |
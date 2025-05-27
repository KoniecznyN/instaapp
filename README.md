# 📸 InstaApp – School Project

This repository contains a simplified **Instagram-like web application** developed as part of a school project. The application allows users to share posts and interact with content, emulating core functionalities of social media platforms.

## 🎯 Features

- **User Posts**: Create and view posts with images and captions.
- **Responsive Design**: Optimized for various screen sizes.
- **Frontend-Backend Architecture**: Separation of concerns for scalability and maintainability.

## 🛠️ Technologies Used

- **Frontend**: Vue.js (40.9%)
- **Backend**: Node.js with Express
- **Styling**: CSS
- **Build Tool**: Vite
- **Languages**: JavaScript (57.8%)

## 🚀 How to Run the Application

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

#### 1. **Clone the repository**:

   ```bash
   git clone https://github.com/KoniecznyN/instaapp.git
   cd instaapp
   ```
#### 2. Install dependencies for both client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
#### 3. Start the backend server:
   ```bash
   node index.js
   ```
The server will start on http://localhost:3000.

#### 4. Start the frontend development server:

Open a new terminal window and navigate to the client directory:
  ```bash
  cd client
  npx vite
  ```
The frontend will start on http://localhost:5173.

#### 5. Access the application:

Open your browser and navigate to http://localhost:5173 to use the application.


## 📚 Project Purpose

This project was developed to practice building full-stack web applications, focusing on the integration between a Vue.js frontend and a Node.js backend. It serves as an educational exercise in understanding client-server interactions and modern web development workflows.

Feel free to fork, explore, or contribute!

# 📅 Firebase-Task-Manager

A **simple and efficient Task Manager** that allows users to **sign up, log in, and manage tasks** using **Firebase Authentication** and **Firestore Database**.

---

## 🚀 Features
- **User Authentication** – Signup, Login, Logout using Firebase Auth
- **Task Management** – Add, Edit, Delete tasks
- **Mark Tasks as Completed** – Keep track of progress
- **Real-time Updates** – Firebase Firestore syncs tasks instantly
- **Mobile-Friendly UI** – Works smoothly on all devices

---

## 📚 Project Structure
```
📦 task-manager
 ┣ 📂 Public       # Contains HTML files
 ┃ ┣ 📜 index.html       # Homepage / Landing page
 ┃ ┣ 📜 login.html       # Login Page
 ┃ ┣ 📜 signup.html      # Signup Page
 ┃ ┣ 📜 dashboard.html   # Main Task Manager Page
 ┣ 📂 css          # Stylesheets
 ┣ 📂 src           # JavaScript files
 ┃ ┣ 📜 firebase.js    # Firebase config & functions
 ┃ ┣ 📜 auth.js        # Signup & login logic
 ┃ ┣ 📜 dashboard.js   # Task management logic
 ┣ 📜 README.md        # Project Documentation
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/Firebase-Task-Manager.git
cd Firebase-Task-Manager
```

### 2️⃣ Set Up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. **Create a new project** & enable:
   - **Authentication** → Enable **Email/Password Login**
   - **Firestore Database** → Set up **rules for security**
3. Copy your Firebase config and replace it in `firebase.js`:
```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
```

### 3️⃣ Open in Browser
Simply open `Public/index.html` in your browser to start using the app!

---

## 🖥️ How It Works
- **Sign Up** – Users create an account using Email & Password.
- **Login** – Authenticated users access the dashboard.
- **Task Management** – Add, edit, delete, and mark tasks as completed.
- **Firestore Sync** – Tasks are saved and updated in real time.
- **Logout** – Users can securely sign out.

---

## 🚀 Future Enhancements
- **Task Due Dates & Notifications** – Remind users of deadlines.
- **Dark Mode** – Add theme customization.
- **Drag & Drop Tasks** – Rearrange tasks easily.
- **Task Categories & Filtering** – Sort tasks by priority, tags, etc.
- **Deploy to Firebase Hosting** – Make the app live!

---

## 💻 Technologies Used
- **HTML, CSS, JavaScript**
- **Firebase Authentication & Firestore**

---

## 📚 License
This project is **open-source** and free to use.

---

## 🌟 Contributing
If you’d like to contribute, fork this repo and submit a pull request!

---

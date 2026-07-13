# Codalyx 🚀 — Your AI-Powered Developer Growth Companion

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-Pro-8E75C2?style=for-the-badge&logo=googlegemini&logoColor=white)](https://deepmind.google/technologies/gemini/)

**Codalyx** is a comprehensive, unified developer platform designed for engineers who want to track their progress, optimize their learning path, and eliminate the friction of switching between multiple competitive programming and development platforms. 

By consolidating profiles from **GitHub, LeetCode, Codeforces, CodeChef, and AtCoder**, Codalyx provides a single source of truth for your developer journey. Powered by **Google Gemini Pro**, it acts as an intelligent Performance Coach that analyses your performance, identifies weak spots, and builds custom roadmaps to accelerate your engineering growth.

---

## 📸 Platform Preview

![User Activity Data Sync](./User%20Activity%20Data%20Sync-2026-04-22-044601.png)

---

## ✨ Key Features

### 📊 Unified Developer Dashboard
* **Omnichannel Analytics:** Track your repositories, language distribution, and commits on GitHub alongside your rankings and problems solved on LeetCode, Codeforces, CodeChef, and AtCoder.
* **Consistency Graphs:** Visualize your daily habits, streaks, and problem-solving velocity in one central command center.

### 🔔 Smart Contest Tracker & Reminders
* **Global Contest Schedule:** Aggregated calendar displaying all upcoming competitive programming contests.
* **Automated Alerts:** Get notifications and reminders before contests start so you never miss a match.
* **Post-Contest Analysis:** Track your ratings, ranking trends, and performance shift over time.

### 🧠 Google Gemini-Powered AI Coach
* **Weakness Analysis:** AI scans your submission history to pinpoint syntax gaps, algorithmic weaknesses, or execution bottlenecks.
* **Custom Roadmaps:** Generates structured, personalized learning paths dynamically updated as you improve.
* **Interactive Explanations:** Real-time coaching on core Computer Science topics including DSA, OS, DBMS, and System Design.
* **Spaced Repetition System:** Smart revision schedules to reinforce concepts you struggle with.

### 🔌 Chrome Extension Syncing
* **Seamless Integration:** Pull profile stats and submission data directly from coding platforms without manual entry.
* **Low-Latency Updates:** Lightweight and secure extension that keeps your dashboard real-time.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS, Framer Motion, Lucide Icons |
| **Backend** | Node.js, Express, REST API |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Authentication** | JSON Web Tokens (JWT), Passport.js |
| **AI Integration** | Google Gemini API (v1.5 Pro/Flash) |
| **Scraping & Sync** | Chrome Extension API, Puppeteer / Axios (Server Scrapers) |

---

## 📁 Repository Structure

```text
codalyx/
├── client/              # React 19 Frontend (Vite + Tailwind CSS)
├── server/              # Node.js Express Backend
├── chrome-extension/    # Browser Extension for automatic profile data sync
└── README.md            # Documentation and Guide
```

---

## 🚀 Installation and Local Setup

### Prerequisites
* **Node.js** (v18.x or higher)
* **MongoDB** (Local instance or MongoDB Atlas Connection URI)
* **Google Gemini API Key** (Obtain from [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the Repository
```bash
git clone https://github.com/vaibhavvvv7/Codalyx.git
cd Codalyx
```

### 2. Environment Configuration

#### Backend Configuration
Create a `.env` file inside the `server/` directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_signing_key_here
GEMINI_API_KEY=your_google_gemini_api_key
CLIENT_URL=http://localhost:5173
```

#### Frontend Configuration
Create a `.env` file inside the `client/` directory:
```env
VITE_API_URL=http://localhost:4000/api
```

### 3. Run Locally

#### Start the Server (Backend)
```bash
cd server
npm install
npm run dev
```

#### Start the Client (Frontend)
Open a new terminal session, then:
```bash
cd client
npm install
npm run dev
```
The application will launch on [http://localhost:5173](http://localhost:5173) and talk to the backend running on port `4000`.

### 4. Load the Chrome Extension
1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Toggle **Developer mode** (top-right corner).
3. Click **Load unpacked** (top-left corner).
4. Select the `chrome-extension/` directory from this repository.
5. The extension icon will now appear in your browser, ready to sync data with your local dashboard.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Built with ❤️ for developers, by [Vaibhav](https://github.com/vaibhavvvv7).*

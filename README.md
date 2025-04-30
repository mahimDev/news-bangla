Here's a clean and focused **frontend-only `README.md`** file for your MERN project `NekreNews`:

---

```markdown
# 📰 NekreNews Frontend

**NekreNews** is a modern news platform frontend built using **React 19**, **Tailwind CSS 4**, and **React Router DOM 7**. It is designed to work with a separate backend (Node.js + Express + MongoDB). The frontend is fully responsive, SEO-ready, and optimized for performance using React Query and Firebase.

🔗 Live Site: [https://nekrenews.net](https://nekrenews.net)

---

## ⚙️ Technologies Used

- **React 19**
- **React Router DOM 7**
- **Tailwind CSS 4**
- **React Helmet** – SEO and Open Graph tags
- **Firebase** – Auth and hosting
- **Axios** – API requests
- **TanStack React Query** – Data fetching and caching
- **Swiper** – Responsive sliders
- **LocalForage** – Offline caching
- **match-sorter** – Fuzzy search
- **sort-by** – Sorting utilities

---

## ✨ Features

- 🔐 Firebase authentication
- 📃 News listing and detail pages
- 📤 Open Graph meta tags for social media previews
- 🧭 Dynamic client-side routing
- 📱 Mobile-first responsive design
- 🖼️ Carousel for featured news using Swiper
- ⚡ Performance optimized with caching (React Query + localForage)

---

## 📁 Project Structure
```

src/
├── components/
├── pages/
├── hooks/
├── routes/
├── App.jsx
└── main.jsx

````

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nekrenews-frontend.git
cd nekrenews-frontend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in the root of the project with the following variables:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_API_BASE_URL=https://your-backend-api.com
```

### 4. Start the development server

```bash
npm run dev
```

---

## 🔗 Backend

The backend repository is located separately. Make sure it's running and accessible via `VITE_API_BASE_URL`.

---

## 📸 SEO & Social Sharing

- `react-helmet` is used to inject meta tags dynamically
- Open Graph meta tags are set on news detail pages for Facebook, Twitter, etc.

---

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, copy, and modify for learning or production.

---

## 👤 Author

**Ibrahim**  
Frontend Developer  
📍 Faridpur, Bangladesh  
🌐 [https://nekrenews.net](https://nekrenews.net)

```

---

Would you like me to generate a Bengali version too for local developers or viewers?
```

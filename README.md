# Medium Clone

This project is a clone of Medium, a platform for publishing articles and engaging with readers. It leverages modern technologies such as **React.js** for the frontend, **Cloudflare Workers** for the backend, and various other tools and libraries to create a seamless user experience.

## 🌍 Live Demo
Check out the website [here](https://medium-fe-psi.vercel.app).

## 🚀 Technologies Used

### Frontend
- **React.js** – For building the user interface.
- **TypeScript** – Enhances code quality and type safety.
- **Zod** – For data validation.

### Backend
- **Cloudflare Workers** – Ensures low latency and high performance globally.
- **JWT (JSON Web Tokens)** – Secure user authentication.

### Database
- **PostgreSQL** – Reliable and scalable database.
- **Prisma** – ORM tool for efficient database interaction.

## 📌 Features
✅ **User Authentication** – Secure authentication using JWT tokens.  
✅ **Article Management** – Publish and edit articles with Markdown support.  
✅ **User Profiles** – View and manage user profiles, including authored articles.  
✅ **Blogging Experience** – Write and publish blogs in Markdown format.  
✅ **Social Interaction** – View and explore other users' profiles.  
✅ **Publish Control** – Articles can only be published when ready.  

## 🛠 Getting Started
Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/pavannitheesh/medium-fe
cd medium-fe
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Database
- Set up **PostgreSQL** on your machine or use a cloud provider.
- Update the connection settings in the Prisma configuration file (`.env`).

### 4️⃣ Run Database Migrations
```sh
npx prisma migrate dev
```

### 5️⃣ Start the Development Servers
```sh
npm run dev
```



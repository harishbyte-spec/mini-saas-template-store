# Mini SaaS Template Store

A **Full-Stack SaaS Template Store** where users can **register, log in, explore curated templates**, and **favorite** the ones they like.  
Built with the **MERN stack** for scalability, clean architecture, and a responsive user experience.

This is a full-stack web app built using:
- Frontend: React (Vite + TailwindCSS)
- Backend: Node.js + Express + MongoDB (Mongoose)
- Auth: JWT + bcrypt

## How to Run
1. Open two terminals:
   - **Server**: 
     ```
     cd server
     npm install
     cp .env.example .env
     npm run seed
     npm run dev
     ```
   - **Client**:
     ```
     cd client
     npm install
     npm run dev
     ```

2. Open http://localhost:5173 and register/login to explore the templates.

Enjoy coding!

require("dotenv").config();
const connectDB = require("./config/db");
const Template = require("./models/Template");

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    console.log("Clearing old templates...");
    await Template.deleteMany({});

    const templates = [
      {
        name: "SaaS Landing",
        description: "A modern responsive SaaS landing page with hero section and call-to-action design.",
        category: "Landing Page",
        thumbnail_url: "https://unbounce.com/photos/State-SaaS-LPs-2020-Hero-Vertical.jpg",
      },
      {
        name: "Dashboard",
        description: "An advanced admin dashboard UI for analytics and insights.",
        category: "Dashboard UI",
        thumbnail_url: "https://cdn.dribbble.com/userupload/17953436/file/original-6e66c60b519ce498109b1153cf566f2b.png?resize=752x&vertical=center",
      },
      {
        name: "Ecommerce",
        description: "An ecommerce template with product listings and checkout page.",
        category: "Ecommerce",
        thumbnail_url: "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_53876-128386.jpg?w=740&t=st=1730891413~exp=1730892013~hmac=9dc93cb83f6bb4b5d2c251f3ec37272e1893d6c59e3b3b909da799b50395b891",
      },
      {
        name: "Portfolio",
        description: "A professional portfolio website for showcasing personal or creative work.",
        category: "Portfolio",
        thumbnail_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      },
      {
        name: "Blog CMS",
        description: "A clean and modern blog layout for content creators and writers.",
        category: "Blog",
        thumbnail_url: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=800&q=80",
      },
    ];

    await Template.insertMany(templates);
    console.log("✅ Templates seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
})();

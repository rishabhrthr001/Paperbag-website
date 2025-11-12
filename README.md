# 🧱 Shree Hardev Packers — Company Website

A modern, responsive website for **Shree Hardev Packers**, built with **Next.js**, **Tailwind CSS**, and **Framer Motion** for smooth animations.  
It highlights services, products, testimonials, about us, and contact details — optimized for speed, SEO, and user experience.

---

## 🚀 Features

- ⚡ **Next.js 14** — server-side rendering & static generation
- 🎨 **Tailwind CSS** — clean, modern responsive UI
- 🎞 **Framer Motion** — smooth animations and transitions
- 📱 **Fully Responsive** — perfect across all devices
- 🗺 **Google Maps Embed** — interactive business location
- 📩 **EmailJS Integration** — direct email submission from contact form
- 🧭 **Dynamic Navigation** — smooth scrolling and route transitions

---

## 🧩 Project Structure

├── app/
│ ├── page.jsx # Homepage
│ ├── about/page.jsx # About Us page
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── ContactForm.jsx
│ │ ├── About.jsx
│ │ ├── Products.jsx
│ │ └── ...other sections
│ ├── styles/
│ │ └── globals.css
├── public/
│ ├── logo.png
│ └── favicon.ico
├── package.json
├── README.md
└── next.config.js

yaml
Copy code

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rishabhrthr001/Paperbag-website.git
cd Paperbag-website
```

```bash
2️⃣ Install dependencies
npm install
```

3️⃣ Run in development mode

```bash
npm run dev
```

Then visit 👉 http://localhost:3000

⚙️ Build for Production
To build the optimized production version:

```bash
npm run build
```

To serve the production build locally:

```bash
npm start
```

🌍 Deployment
🔹 Deploy on Vercel (Recommended)
Easiest method for Next.js projects:

```bash
npm i -g vercel
vercel
```

🔹 Self-Hosting / VPS Deployment

```bash
npm install
npm run build
npm start
```

🧰 Environment Variables
For EmailJS integration:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These should be placed inside a .env.local file at the root of your project.

🗺 Google Maps Embed
The contact section uses an interactive map embed:

```bash
<iframe
  src="https://www.google.com/maps/embed?pb=!4v1762977521304!6m8!1m7!1s3W_U-4iEaTIyi6Th5RhBHA!2m2!1d28.65863599500068!2d77.13670727183846!3f329.329915155184!4f4.7564731993847715!5f0.7820865974627469"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

🧑‍💻 Tech Stack
Next.js 14

React 18

Tailwind CSS

Framer Motion

Lucide React Icons

EmailJS

💬 Author
Rishabh Rathore (Golu)
🧑‍💻 Web3 & Full-Stack Developer
📧 rishabh.rthr001@gmail.com
🌐 https://github.com/rishabhrthr001

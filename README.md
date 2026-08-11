# AICTE IDEA Lab Club Website

This website has been built with **Next.js** (App Router) and compiled as a fully static website. It is designed to be fast, responsive, and extremely easy to run and develop.

---

## 🛠️ Step-by-Step Guide for Development

### 1. Prerequisites (Things you need installed)
Make sure you have **Node.js** installed on your computer.
* Check if you have it: Open your terminal/command prompt and run:
  ```bash
  node -v
  ```
  *(If it outputs a version number like `v18.x.x` or `v20.x.x`, you are good to go. If not, download and install it from [nodejs.org](https://nodejs.org/)).*

---

### 2. Getting Started (First time setup)
Open your terminal in this project directory and run:

```bash
# Install dependencies (do this only once or when package.json changes)
npm install
```

---

### 3. Local Development (Running the website locally)
To start editing the website and previewing it in your browser:

```bash
# Start the local development server
npm run dev
```

* Now open your browser and go to: **[http://localhost:3000](http://localhost:3000)**
* When you edit any file, the changes will update **automatically** in your browser.

---

## 📂 Project Structure (Where things are)

Here is where the files you want to edit live:

* 📄 **`src/app/page.jsx`** — The landing page (Home, About, Live Event, Features, Workflow, Stats, Contact, etc.).
* 📄 **`src/app/register/page.jsx`** — The project registration subpage (`/register`).
* 📁 **`src/components/`** — Individual page component files (Header, Footer, AboutSection, LiveEventSection, etc.).
* 📁 **`src/data/content.js`** — Main text data and navigation items. Update text data here without touching the code.
* 📄 **`src/app/globals.css`** — The main stylesheet. Custom styles, fonts, variables, and responsive code are here.
* 📁 **`public/`** — **Put all images and files here!**
  * If you put `image.png` inside `public/`, reference it as `<img src="/image.png" />`.

---

## 🚀 How to Build and Deploy (Static Site Export)

To compile the entire website into clean, static HTML/CSS/JS files that you can host anywhere:

```bash
# Build the project
npm run build
```

* Next.js will build the project and create a folder named **`out/`** at the root of the project.
* The **`out/`** folder contains the final, optimized static pages. You can upload the contents of this folder directly to any host (Netlify, GitHub Pages, Vercel, Hostinger, AWS S3, etc.).

---

## 🆘 Troubleshooting

### ❌ Error: `Cannot find module './748.js'` (or other Webpack/cache errors)
If you get Webpack compile errors during development, it is usually because the development build cache is corrupted.
* **Fix:** Stop your server (`Ctrl + C` in the terminal), delete the **`.next/`** folder, and start it again:
  ```bash
  # Delete cache and restart dev
  rm -rf .next
  npm run dev
  ```

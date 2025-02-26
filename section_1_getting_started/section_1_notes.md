# Section 1: Getting Started with Next.js 🚀
> This section introduces Next.js, explains its key features, and walks through setting up a project.

---

## 📌 1. What is Next.js?
Next.js is a **full-stack framework** built on **React.js** that simplifies development by handling both frontend and backend functionality in a single project.

### **🔹 Why use Next.js?**
- 🚀 **Performance Optimizations** (SSR, SSG, ISR).
- 📂 **File-based Routing** (No need for React Router).
- 🌍 **Full-stack Features** (API routes, authentication, databases).

### **🔹 Next.js vs. React.js**
| Feature         | React.js             | Next.js |
|----------------|----------------------|---------|
| Routing       | Uses React Router     | File-based routing |
| Rendering     | Client-side rendering | Supports SSR, SSG, ISR |
| Backend APIs  | Needs external API    | Built-in API routes |

---

## 📌 2. Prerequisites
Before starting, ensure you have:
- **Basic React.js knowledge** (props, state, hooks).
- **Node.js installed** (`node -v` to check).
- Familiarity with JavaScript ES6+.

---

## 📌 3. Setting Up a Next.js Project
To create a Next.js project, run:

```sh
npx create-next-app@latest my-next-app
```

- npx → Runs create-next-app without installing globally.
- @latest → Ensures the newest version.
- my-next-app → Project name.

After installation, navigate to your project directory and start the development server:
```sh
cd my-next-app
npm run dev
```

- Runs a local development server at [http://localhost:3000/](http://localhost:3000/)
- Stop the server: Ctrl + C
- Restart the server: npm run dev

---

## 📌 4. Understanding Next.js Routing
Next.js uses file-based routing, meaning the folder structure defines the URL paths.

### Example: Adding a New Route (/awesome)
Create this folder and file inside your project:

```md
app/
    awesome/   ➝ Accessible at `/awesome`
        page.js
```

```jsx
// app/awesome/page.js
export default function AwesomePage() {
    return <h1>This is the Awesome Page!</h1>;
}
```

📌 Visit: [http://localhost:3000/awesome](http://localhost:3000/awesome)

---

## 📌 5. App Router vs. Pages Router
Next.js 13+ introduced App Router (app/), replacing the Pages Router (pages/).

| Feature       | Pages Router (Old)                      | App Router (New)             |
|---------------|-----------------------------------------|------------------------------|
| File Location | pages/ folder                           | app/ folder                  |
| Routing Method| Uses getServerSideProps, getStaticProps | Uses React Server Components |
| API Handling  | Uses pages/api folder                   | Uses Server Actions          |
| Status        | Still supported                         | Future standard              |

---

## 📌 6. Inspecting Source Code
### 🔹 How to View Page Source
1. Open the browser and go to [http://localhost:3000/](http://localhost:3000/).
2. Right-click and choose "View Page Source".
3. Unlike React, Next.js may show pre-rendered HTML (SSR or SSG).

### 🔹 Open DevTools (F12 or Ctrl + Shift + I)
- Elements Tab → See the actual rendered HTML.
- Network Tab → Inspect API requests.

---

## 📌 7. Course Exercises
- The course provides starter projects and CodeSandbox templates.
- Code along while watching the videos to understand concepts better.

---

## 📌 Summary 🚀
✔ Next.js is a full-stack framework that simplifies React development.
✔ Uses file-based routing instead of React Router.
✔ Supports Server & Client Components for optimized performance.
✔ App Router is the modern way to structure projects.
✔ Dev server runs on [http://localhost:3000/](http://localhost:3000/) (use npm run dev).
✔ Inspect source code to understand SSR vs. CSR differences.

---

📌 Resources 📚
[Next.js Documentation](https://nextjs.org/docs)
[React Documentation](https://reactjs.org/docs/getting-started.html)
[Official Next.js GitHub](https://github.com/vercel/next.js)

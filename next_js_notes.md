# Next.js Comprehensive Notes

## 📌 Introduction to Next.js
Next.js is a **React framework** for production-grade applications, providing **SSR (Server-Side Rendering)**, **SSG (Static Site Generation)**, **API Routes**, and **optimized performance** features. 

### ✅ Why Use Next.js?
- **Hybrid rendering** (CSR, SSR, SSG, ISR)
- **Automatic code splitting** (faster page loads)
- **Built-in API routes** (for server-side logic)
- **SEO-friendly** (SSR and metadata control)
- **Fast refresh** (improved development experience)
- **TypeScript support** (optional but recommended)

---

## 📂 Next.js File & Folder Structure

```plaintext
/project-root
│── package.json  # Project dependencies & scripts
│── .next/        # Compiled output (do not edit)
│── node_modules/ # Installed packages
│── public/       # Static assets (images, fonts, etc.)
│── pages/        # Route-based files (Pages Router)
│   ├── index.js  # Default home route
│   ├── about.js  # Example page
│   ├── api/      # API routes (server functions)
│   ├── _app.js   # Custom app wrapper
│   ├── _document.js # Custom document wrapper
│── app/          # New "App Router" for Next.js 13+
│── components/   # Reusable UI components
│── styles/       # Global and modular CSS
│── next.config.js # Next.js configuration
```

### 📌 Important Files
| File | Purpose |
|------|---------|
| `_app.js` | Customizes Next.js app behavior |
| `_document.js` | Customizes the HTML structure |
| `next.config.js` | Configurations for Next.js |
| `public/` | Stores static files |
| `pages/api/` | API Routes (backend functions) |

---

## 📌 Routing in Next.js
Next.js supports **two routing systems**:
1. **Pages Router** (traditional `pages/` folder)
2. **App Router** (introduced in Next.js 13 with `app/` folder)

### 📂 Pages Router (Traditional Routing)
- **File-based routing**: A file inside `pages/` becomes a route.
- **Dynamic routing**: Uses `[param].js` syntax.
- **API routes**: `pages/api/` handles backend requests.

#### Example: Basic Page (`pages/about.js`)
```javascript
export default function About() {
  return <h1>About Page</h1>;
}
```

#### Example: Dynamic Routing (`pages/post/[id].js`)
```javascript
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  
  return <h1>Post ID: {id}</h1>;
}
```

### 📂 App Router (New Next.js 13+ Routing)
- Uses **`app/`** instead of `pages/`
- Supports **React Server Components (RSC)**
- Uses **`layout.js`** for shared layouts
- Uses **`page.js`** instead of `.js` files

#### Example: Basic App Router Page (`app/about/page.js`)
```javascript
export default function About() {
  return <h1>About Page</h1>;
}
```

#### Example: Dynamic Route (`app/post/[id]/page.js`)
```javascript
export default function Post({ params }) {
  return <h1>Post ID: {params.id}</h1>;
}
```

---

## 📌 Data Fetching in Next.js
### 1️⃣ Server-Side Rendering (SSR)
- Renders **at request time** (dynamic pages)
- Uses `getServerSideProps()`

```javascript
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}
```

### 2️⃣ Static Site Generation (SSG)
- Pre-renders pages **at build time**
- Uses `getStaticProps()`

```javascript
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}
```

### 3️⃣ Incremental Static Regeneration (ISR)
- Combines SSG with periodic updates
- Uses `revalidate` option

```javascript
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data }, revalidate: 60 };
}
```

### 4️⃣ Client-Side Rendering (CSR)
- Fetches data **on the client** (useEffect)

```javascript
import { useEffect, useState } from 'react';

export default function ClientPage() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

---

## 📌 API Routes
- Create backend functions inside `pages/api/`
- Runs on the **server**, not in the browser

#### Example: Basic API Route (`pages/api/hello.js`)
```javascript
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API' });
}
```

#### Example: Handling POST Requests
```javascript
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    res.status(200).json({ received: data });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
```

---

## 📌 Middleware in Next.js
- Runs **before** request reaches API route
- Useful for **auth, logging, caching**

#### Example: Middleware (`middleware.js`)
```javascript
import { NextResponse } from 'next/server';

export function middleware(req) {
  if (!req.cookies.token) {
    return NextResponse.redirect('/login');
  }
  return NextResponse.next();
}
```

---

## 📌 Deployment
- **Vercel** (recommended)
- **Docker**
- **Custom servers** (Node.js, AWS, DigitalOcean, etc.)

```bash
# Deploy to Vercel
vercel
```

```dockerfile
# Dockerfile example
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]
```

---

## 🏁 Conclusion
This is a detailed reference for **all major Next.js concepts**. With this guide, you should have a **complete understanding of Next.js** from a **functional and technical** perspective, even if you're not interested in web development.

## 📌 Additional Code Examples

### Custom 404 Page
Create a custom 404 error page by adding a `404.js` file inside the `pages/` directory.

```javascript
export default function Custom404() {
    return <h1>404 - Page Not Found</h1>;
}
```

### Custom 500 Page
Create a custom 500 error page by adding a `500.js` file inside the `pages/` directory.

```javascript
export default function Custom500() {
    return <h1>500 - Server-side Error</h1>;
}
```

### Environment Variables
Next.js supports environment variables using `.env.local` file.

```plaintext
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access the environment variable in your code:

```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### Custom Head Component
Use the `Head` component from `next/head` to customize the HTML `<head>`.

```javascript
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="This is the home page" />
            </Head>
            <h1>Welcome to the Home Page</h1>
        </>
    );
}
```

### Image Optimization
Next.js provides an `Image` component for optimized image loading.

```javascript
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Image src="/images/pic.jpg" alt="Picture" width={500} height={500} />
        </div>
    );
}
```

### Custom App with Global CSS
Customize the global CSS by editing `_app.js`.

```javascript
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
```

### API Route with Middleware
Combine API routes with middleware for enhanced functionality.

```javascript
import { NextResponse } from 'next/server';

export function middleware(req) {
    if (!req.cookies.token) {
        return NextResponse.redirect('/login');
    }
    return NextResponse.next();
}

export default function handler(req, res) {
    res.status(200).json({ message: 'Hello from API with Middleware' });
}
```

### Custom Document
Customize the HTML document structure by editing `_document.js`.

```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/styles.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
```

## 📌 Integrating Databases with Next.js

### Prisma

Prisma is an ORM (Object-Relational Mapping) tool that simplifies database interactions.

#### 1️⃣ Install Prisma

```bash
npm install @prisma/client
npm install prisma --save-dev
```

#### 2️⃣ Initialize Prisma

```bash
npx prisma init
```

This creates a `prisma` folder with a `schema.prisma` file.

#### 3️⃣ Configure Prisma Schema

Edit `schema.prisma` to define your data models.

```prisma
datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

generator client {
    provider = "prisma-client-js"
}

model User {
    id    Int     @id @default(autoincrement())
    name  String
    email String  @unique
}
```

#### 4️⃣ Migrate Database

```bash
npx prisma migrate dev --name init
```

#### 5️⃣ Use Prisma Client

```javascript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const users = await prisma.user.findMany();
    res.json(users);
}
```

### Supabase

Supabase is an open-source Firebase alternative.

#### 1️⃣ Install Supabase

```bash
npm install @supabase/supabase-js
```

#### 2️⃣ Initialize Supabase Client

Create a `lib/supabase.js` file.

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

#### 3️⃣ Use Supabase Client

```javascript
import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
    const { data, error } = await supabase.from('users').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
}
```

#### 4️⃣ Environment Variables

Add your Supabase URL and Key to `.env.local`.

```plaintext
NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co
NEXT_PUBLIC_SUPABASE_KEY=public-anon-key
```

---

## 📌 Using Tailwind CSS with Next.js

Tailwind CSS is a utility-first CSS framework that can be easily integrated with Next.js for styling your application.

### 1️⃣ Install Tailwind CSS

First, install Tailwind CSS and its dependencies.

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2️⃣ Configure Tailwind CSS

Next, configure your `tailwind.config.js` file to specify the paths to all of your template files.

```javascript
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

### 3️⃣ Add Tailwind Directives to CSS

Create a `styles/globals.css` file and add the Tailwind directives.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4️⃣ Import CSS in `_app.js`

Import the `globals.css` file in your `_app.js`.

```javascript
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
```

### 5️⃣ Using Tailwind CSS Classes

You can now use Tailwind CSS classes in your components.

```javascript
export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
        </div>
    );
}
```

### Customizing Tailwind CSS

You can customize Tailwind CSS by editing the `tailwind.config.js` file. For example, you can extend the default theme or add custom plugins.

```javascript
module.exports = {
    theme: {
        extend: {
            colors: {
                customColor: '#123456',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
```

With these steps, you have successfully integrated Tailwind CSS with your Next.js application, allowing you to build responsive and modern UIs efficiently.
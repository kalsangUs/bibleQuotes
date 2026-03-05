# Bible Quotes

A web app that displays a random Bible verse on every page load, built with Next.js and the [bible-api.com](https://bible-api.com) API.

## Features

- Fetches a random verse from the World English Bible (WEB) translation on each request
- Server-side rendering via Next.js async Server Components — no client-side fetch needed
- Clean, minimal UI with dark mode support

## Tech Stack

- **[Next.js 16](https://nextjs.org)** — App Router, server components
- **[React 19](https://react.dev)**
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[shadcn/ui](https://ui.shadcn.com)** — component library
- **[Convex](https://convex.dev)** — backend (configured, ready to use)
- **[bible-api.com](https://bible-api.com)** — free Bible verse API

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see a random verse.

## API

Verses are fetched from:

```
GET https://bible-api.com/data/web/random
```

Response shape:

```json
{
  "translation": {
    "identifier": "web",
    "name": "World English Bible",
    "language": "English",
    "license": "Public Domain"
  },
  "random_verse": {
    "book_id": "JHN",
    "book": "John",
    "chapter": 3,
    "verse": 16,
    "text": "For God so loved the world..."
  }
}
```

Rate limit: 15 requests per 30 seconds per IP.

# **⚠️ IMPORTANT DISCLAIMER ⚠️**  
**THIS PROJECT WAS CREATED WITH SIGNIFICANT ASSISTANCE FROM AI (Grok by xAI)**  
**Most of the code structure, explanations, debugging, deployment steps, and documentation were generated or heavily guided by AI.**

All **required** features work as specified in the assignment.  
Please keep this in mind during evaluation.

---

# Product Explorer Dashboard

A modern, responsive product browsing application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** as part of a frontend technical assignment.

**Live Demo:** [https://your-vercel-app-name.vercel.app](https://your-vercel-app-name.vercel.app)  
*(Please update this link after successful deployment)*

## Features Implemented

### All Core Required Features ✓

- Product listing page fetching data from Fake Store API
- Responsive grid layout (mobile-first approach)
- Loading skeletons + proper error state handling
- Client-side search by product title
- Category filtering (dropdown)
- Dynamic product detail page (`/products/[id]`)
- Favorites system:
  - Mark/unmark products as favorite
  - Persistence using **localStorage**
  - Filter/toggle: "Show only favorites"

### Technical Highlights

- Next.js App Router (mix of Server & Client Components where appropriate)
- Full TypeScript usage (typed API responses, props, state)
- Tailwind CSS — clean, utility-first, responsive styling
- Clean folder structure & reusable component architecture
- Proper loading / error / empty states
- Strict typing throughout (no `any` types used)


### Bonus Features Status

| Feature                     | Status     | Notes                                      |
|-----------------------------|------------|--------------------------------------------|
| Server Components usage     | ✓ Partial  | Used where it made sense                   |
| Pagination / infinite scroll| ✗          | Not necessary (small dataset ~20 items)    |
| Sorting (price)             | ✗          | Could be added easily                      |
| Dark mode toggle            | ✗          | Scope decision                             |
| Basic accessibility         | ✓ Partial  | Semantic HTML + some ARIA labels           |
| Unit tests                  | ✗          | Time constraint                            |

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Source**: https://fakestoreapi.com
- **State Persistence**: browser localStorage (favorites)
- **Deployment Platform**: Vercel (recommended)

## Project Structure (overview)

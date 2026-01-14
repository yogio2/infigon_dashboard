**Frontend Technical Assignment Documentation**

**Stack**  
Next.js (App Router) + TypeScript + Tailwind CSS

**Time Limit**  
Maximum 2 days

### Objective
Build a small, production-grade frontend application that demonstrates:

- Good component architecture
- API integration
- State management
- Responsive design
- Clean & maintainable code

### Project Name: Product Explorer Dashboard

Create a web application for browsing products with filtering, detailed view and simple client-side persistence feature.

### Core Required Features

1. **Product Listing Page** (`/`)
   - Fetch products from public API:
     ```
     https://fakestoreapi.com/products
     ```
   - Display products in responsive grid containing:
     - Product image
     - Title
     - Price
     - Category
   - Must implement:
     - Loading state (skeleton cards / spinner recommended)
     - Error state handling

2. **Search & Filtering**
   - **Search**: by product title (client-side filtering)
   - **Category filter**: dropdown or category buttons/chips

3. **Product Detail Page** (`/products/[id]`)
   - Dynamic route using Next.js App Router
   - Display:
     - Large product image
     - Title
     - Full description
     - Price
     - Category

4. **Favorites Feature**
   - Ability to mark / unmark products as favorite
   - Persist favorites in **localStorage**
   - Add filter/toggle: "Show only favorites"

5. **Responsive Design**
   - Mobile-first approach
   - Must be usable on:
     - Mobile (< 640px)
     - Tablet (~768px)
     - Desktop (≥1024px)

### Technical Requirements

**Mandatory technologies:**

- Next.js **App Router**
- TypeScript (strict mode recommended)
- Tailwind CSS

**Architecture expectations:**

- Properly typed API responses & component props
- Reusable, composable components
- Clean folder structure, example:

  ```
  src/
  ├── app/
  │   ├── products/
  │   │   └── [id]/
  │   ├── components/
  │   ├── lib/
  │   ├── types/
  │   └── ...
  ```

- Proper error handling (no silent failures)
- Avoid `any` type unless really justified

### Bonus Points (Optional – Nice to have)

- Use of **Server Components** where it makes sense
- Pagination / infinite scroll
- Sorting (e.g. by price: low→high, high→low)
- Dark mode toggle
- Basic accessibility improvements  
  (ARIA labels, focus management, keyboard navigation)
- Simple unit/integration tests  
  (Jest + React Testing Library preferred)

### Deliverables

1. **GitHub Repository** containing:
   - Complete source code
   - Meaningful commit history (good commit messages)
   - **README.md** including at minimum:
     - Project setup instructions (`npm install`, `npm run dev`, etc.)
     - List of implemented features
     - Any important assumptions / trade-offs made
     - (Optional) Link to live demo

2. **Live Demo** (highly recommended)
   - Deployed on Vercel / Netlify / Render / similar

### Evaluation Criteria

| Area              | Main Evaluation Focus                              |
|-------------------|-----------------------------------------------------|
| Code Quality      | Readability, structure, TypeScript usage            |
| Next.js Usage     | Correct App Router patterns, data fetching strategy |
| UI/UX             | Tailwind usage, responsive behavior, loading states|
| State Management  | Clean, predictable, maintainable logic              |
| Architecture      | Component composition, typing, folder structure     |
| Completeness      | All **required** features implemented correctly     |

Good luck! 🚀

Focus on clean code, good developer experience and thoughtful UX decisions rather than trying to implement every bonus feature. Quality over quantity.
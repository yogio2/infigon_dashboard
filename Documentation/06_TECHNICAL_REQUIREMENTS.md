# Task 6: Technical Requirements & Architecture

## Mandatory Technologies

### Framework
- **Next.js**: App Router (NOT Pages Router)
- Latest stable version recommended

### Language
- **TypeScript**: Strict mode recommended
- Properly typed components and functions
- Avoid `any` type unless absolutely justified

### Styling
- **Tailwind CSS**: For all styling
- Configuration should be properly set up
- Utility-first approach

## Code Architecture

### Folder Structure
Recommended structure:

```
src/
├── app/
│   ├── products/
│   │   └── [id]/
│   ├── page.tsx (Home/Listing)
│   └── layout.tsx
├── components/
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── SearchBar.tsx
│   └── ...
├── lib/
│   ├── api.ts (API calls)
│   └── utils.ts (Utility functions)
├── types/
│   └── product.ts (Type definitions)
└── styles/
    └── globals.css
```

### Component Design
- **Reusable Components**: Create composable, single-responsibility components
- **Props Typing**: Properly type all component props
- **Props Interface**: Define interfaces for component props
- **Clean Components**: Keep components focused and testable

### API Integration
- Create dedicated API utility functions
- Handle API errors gracefully
- Type API responses
- Use proper error boundaries

### Type Definitions
- Define interfaces for:
  - Product data structure
  - API responses
  - Component props
  - Application state

### Error Handling
- **No Silent Failures**: All errors should be caught and handled
- **User Feedback**: Display meaningful error messages
- **Error Boundaries**: Consider error boundary components
- **Logging**: Log errors for debugging (optional but recommended)

## Server vs Client Components
- Use Next.js Server Components where appropriate
- Client Components for interactive features
- Proper use of `"use client"` directive

## State Management
- Choose appropriate state management approach:
  - React hooks (useState, useContext) for simple state
  - Custom hooks for shared logic
  - Context API for global state (e.g., favorites)

## Code Quality
- Clean, readable code
- Meaningful variable and function names
- Proper code organization
- Consistent formatting

## TypeScript Best Practices
- Enable strict mode in tsconfig.json
- Avoid `any` type
- Use proper type inference
- Define explicit return types for functions

## Acceptance Criteria
- [ ] Project structure is clean and organized
- [ ] All components are properly typed with TypeScript
- [ ] API integration is clean and error-handled
- [ ] No `any` types used (or justified if used)
- [ ] Code is readable and maintainable
- [ ] Components are reusable and composable
- [ ] Proper folder structure is followed
- [ ] Next.js App Router is used correctly

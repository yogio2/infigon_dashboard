# Task 3: Product Detail Page

## Route
`/products/[id]` (Dynamic route using Next.js App Router)

## Objectives
Create a detailed product view page where users can see complete product information.

## Requirements

### Dynamic Routing
- Use Next.js App Router `[id]` dynamic route
- Route should be: `/products/[id]`
- Handle valid and invalid product IDs

### Product Information Display
Display the following product details:
- Large product image
- Product title
- Full description
- Price
- Category

### Layout
- Organize information in a clear, readable format
- Image should be prominent
- Text information should be well-spaced and readable

### Navigation
- Easy way to go back to the product listing
- Related products or recommended items (optional)

### Data Handling
- Fetch specific product data (use API or local data)
- Handle cases where product ID doesn't exist
- Display error message for invalid products

## Acceptance Criteria
- [ ] Product detail page is accessible via `/products/[id]`
- [ ] All required product information is displayed
- [ ] Page is responsive on all screen sizes
- [ ] Back navigation is available
- [ ] Invalid product IDs show appropriate error message
- [ ] Page layout is clean and professional

# Optional: Bonus Features

These features are **NOT required** but will earn bonus points if implemented well. Focus on required features first.

## Bonus Features List

### 1. Server Components
- Use **Next.js Server Components** where it makes sense
- Reduce client-side JavaScript
- Examples:
  - Data fetching on server
  - Server-side filtering (if applicable)
  - Static generation where possible

### 2. Pagination / Infinite Scroll
- Implement pagination with page numbers
- **OR** implement infinite scroll (lazy loading)
- Better performance for large product lists
- Improved user experience

### 3. Sorting
Implement sorting options such as:
- Sort by price: Low → High
- Sort by price: High → Low
- Sort by rating (if available)
- Sort by title: A-Z, Z-A
- Sort by newest/oldest

Add sorting UI:
- Dropdown menu
- Buttons/tabs
- Combine with existing filters

### 4. Dark Mode Toggle
- Implement light/dark theme toggle
- **Storage**: Persist user preference in localStorage
- Apply to entire application
- Use Tailwind CSS dark mode utilities
- Consider system preference detection

### 5. Accessibility Improvements
- **ARIA Labels**: Add semantic ARIA labels
- **Focus Management**: Proper focus states and keyboard navigation
- **Keyboard Navigation**: 
  - Tab through interactive elements
  - Enter/Space to activate buttons
  - Escape to close modals/dropdowns
- **Semantic HTML**: Use proper HTML elements
- **Color Contrast**: Ensure sufficient contrast ratios
- **Alt Text**: Meaningful alt text for images

### 6. Unit/Integration Tests
- **Framework**: Jest + React Testing Library preferred
- Test coverage:
  - Component rendering
  - User interactions
  - API mocking
  - State management
  - Edge cases
- Aim for reasonable coverage, not 100%

### 7. Additional Features (Optional)
- Product ratings display
- Reviews/comments section
- Shopping cart functionality
- User accounts
- Wishlist enhancements
- Advanced filtering
- Product recommendations

## Implementation Notes
- **Quality Over Quantity**: Implement fewer features well rather than many poorly
- **Polish**: Make sure bonus features are polished and bug-free
- **Testing**: Test bonus features thoroughly
- **Documentation**: Document new features in README

## Priority Recommendation
If implementing bonus features, prioritize in this order:
1. Accessibility improvements (high impact on usability)
2. Sorting (frequently requested feature)
3. Server Components (demonstrates advanced knowledge)
4. Dark Mode (user preference)
5. Tests (demonstrates quality)
6. Pagination/Infinite Scroll (performance)

# Task 2: Search & Filtering

## Objectives
Implement client-side search and category filtering to help users find products quickly.

## Requirements

### Search Functionality
- **Type**: Client-side filtering by product title
- **Search Input**: Text field for users to enter search terms
- **Real-time Search**: Filter products as user types
- **Search Scope**: Search across product titles only

### Category Filtering
- **Implementation**: Dropdown or category buttons/chips (your choice)
- **Dynamic Categories**: Extract categories from the product data
- **Filtering**: Allow users to filter by selected category
- **Multi-filter Support**: Allow combining search and category filters

### User Experience
- Search should be case-insensitive
- Partial matches should be included
- Filtering should update the product list in real-time
- Clear visual indication of active filters

### Performance
- Client-side filtering (no API calls needed)
- Should handle all 20 products smoothly

## Acceptance Criteria
- [ ] Search box is functional and filters products by title
- [ ] Category filter is implemented (dropdown or buttons)
- [ ] Search and category filters work together
- [ ] Results update in real-time
- [ ] Search is case-insensitive
- [ ] No results state is handled gracefully

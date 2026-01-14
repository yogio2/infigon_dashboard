# Task 4: Favorites Feature

## Objectives
Allow users to save their favorite products and access them quickly.

## Requirements

### Mark/Unmark Favorites
- Add ability to mark products as favorites
- Add ability to unmark products from favorites
- Action should be available on both:
  - Product listing page
  - Product detail page
- Visual indicator (e.g., heart icon) to show favorite status

### Data Persistence
- **Storage Method**: Browser's localStorage
- Persist favorites across page refreshes
- Data should survive browser restarts

### Favorites Filter
- Add a toggle or button to show "only favorites"
- Can be implemented on the product listing page
- Toggle between "All products" and "Favorites only"

### User Feedback
- Clear visual indication of which products are favorited
- Confirmation or feedback when marking/unmarking as favorite
- Update in real-time without page reload

### Edge Cases
- Handle localStorage unavailability
- Clear favorites option (optional)
- Handle deleted/unavailable products in favorites

## Acceptance Criteria
- [ ] Products can be marked as favorites
- [ ] Favorite status is persisted in localStorage
- [ ] Favorites persist after page refresh
- [ ] Favorites can be toggled/filtered on listing page
- [ ] Favorite status is visually indicated
- [ ] Unmark functionality works correctly
- [ ] Favorites count or indicator is displayed

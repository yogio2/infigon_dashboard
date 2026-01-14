# Evaluation Criteria

Your project will be evaluated based on the following criteria:

## 1. Code Quality (20%)

**What's Being Evaluated:**
- Readability: Is the code easy to understand?
- Structure: Is the code well-organized?
- TypeScript Usage: Are types used effectively?
- Best Practices: Do you follow React and Next.js conventions?

**Good Code Characteristics:**
- Clear, descriptive variable and function names
- Proper code organization and structure
- Consistent formatting and style
- Comments where necessary (but not excessive)
- No dead code or unused imports
- DRY (Don't Repeat Yourself) principle applied

**Things to Avoid:**
- Unclear variable names (e.g., `x`, `data1`, `temp`)
- Deeply nested code
- Functions that do too many things
- Inconsistent naming conventions
- Code duplication

## 2. Next.js Usage (20%)

**What's Being Evaluated:**
- Correct use of App Router (not Pages Router)
- Proper data fetching strategy
- Component organization
- Route structure

**Good Practices:**
- Use App Router `[id]` for dynamic routes
- Leverage Server Components where appropriate
- Proper use of `layout.tsx` and `page.tsx`
- Efficient data fetching
- Correct error handling

**Things to Avoid:**
- Using old Pages Router
- Unnecessary client-side rendering
- Over-fetching data
- Poor route organization

## 3. UI/UX (20%)

**What's Being Evaluated:**
- Tailwind CSS usage effectiveness
- Responsive design implementation
- Loading and error states
- Overall user experience

**Good Practices:**
- Visually appealing design
- Consistent styling throughout
- Responsive layouts that work on all devices
- Clear loading indicators
- Helpful error messages
- Intuitive user interactions

**Things to Avoid:**
- Broken layouts on mobile/tablet
- Poor color choices or contrast
- Missing loading/error states
- Confusing navigation
- Slow or janky interactions

## 4. State Management (15%)

**What's Being Evaluated:**
- Clean and predictable state
- Maintainable state logic
- Proper use of React hooks
- Efficient re-rendering

**Good Practices:**
- Clear state structure
- Separation of concerns
- Reusable custom hooks
- Proper use of useContext/useState
- Efficient state updates

**Things to Avoid:**
- Prop drilling (passing props too many levels)
- Unnecessary re-renders
- Complex state logic mixed with UI
- Global state for everything

## 5. Architecture (15%)

**What's Being Evaluated:**
- Component composition
- Proper typing with TypeScript
- Folder structure clarity
- Modularity and reusability

**Good Practices:**
- Small, focused components
- Clear separation of concerns
- Reusable component patterns
- Proper TypeScript types
- Well-organized file structure
- Utility functions for shared logic

**Things to Avoid:**
- Large, monolithic components
- Poor folder organization
- Mixing business logic with UI
- Missing type definitions

## 6. Completeness (10%)

**What's Being Evaluated:**
- All required features are implemented
- Features work correctly
- No broken functionality

**Required Features:**
1. ✓ Product Listing Page with API integration
2. ✓ Loading and error states
3. ✓ Search by title
4. ✓ Category filtering
5. ✓ Product Detail Page with dynamic routing
6. ✓ Favorites feature with localStorage
7. ✓ Responsive design (mobile, tablet, desktop)

**Completeness Checklist:**
- [ ] All required features working
- [ ] No broken links or routes
- [ ] API integration working
- [ ] Data persistence working
- [ ] No runtime errors

## Bonus Evaluation

Bonus features implemented well will positively impact your score:
- Server Components usage
- Advanced features (pagination, sorting, dark mode)
- Accessibility improvements
- Test coverage
- Deployment to live URL

## Overall Assessment

| Score Range | Interpretation |
|------------|-----------------|
| 90-100     | Excellent - Production-ready code |
| 80-89      | Very Good - Minor improvements needed |
| 70-79      | Good - Some improvements needed |
| 60-69      | Acceptable - Several improvements needed |
| <60        | Needs Work - Significant issues |

## Key Takeaways

**Focus On:**
1. Clean, readable code
2. Proper TypeScript usage
3. Correct Next.js patterns
4. Complete feature implementation
5. Responsive, polished UI

**Quality Over Quantity:**
- Implement required features well rather than many bonus features poorly
- A complete, polished application beats a half-built one with bonus features
- Code quality matters more than feature count

**Developer Experience:**
- Make setup easy (good README)
- Commit messages should tell a story
- Code should be easy for others to understand and extend

## Red Flags to Avoid

- ❌ Using `any` types extensively
- ❌ No error handling
- ❌ Broken responsive design on mobile
- ❌ Missing required features
- ❌ Console errors or warnings
- ❌ Poor git history
- ❌ No README or unclear README
- ❌ Non-functional API integration

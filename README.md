# Frontend Assignment: Landing site Optimization

## Changes Documentation


1. **Where**: `app/api/photos/route.ts`.
2. **What**: Creates a server function that hides GET request.
3. **Why**: Fixed error by adding the missing API keys, wrote a function to hide sensitive information like API keys and for better SEO perfomance as data can be fetched server-side

---

1. **Where**: `app/components/Hero.tsx`.
2. **What**: Fixed file name for video
3. **Why**: Background video was not visible for landing page.

---

1. **Where**: `app/gallery/page.tsx`.
2. **What**: Memoized photo cards, added skeleton loader for cards, Limited the number of visible cards at a time and added load more button to progressively load more images.
3. **Why**: memo minimizes re-renders to keep the app fast, next/image optimizes image loading, loading skelteon improves perceived performace. Load More button avoids rendering a huge list of items at once & gives a smoother faster initial load time. 

--- 

1. **Where**: `next.config.js`.
2. **What**: Adds a external domainto serve images
3. **Why**: Resolved Invalid external image domain Error and console error : Image from origin 'https://images.pexels.com' has not been configured.

--- 

1. **Where**: `app/components/Hero.tsx`.
2. **What**: Fixed file name for video
3. **Why**: Background video was not visible for landing page.

---
1. **Where**: `app/blog/[slug]/page.tsx`.
2. **What**: Add a blog details page and added skelteon loader. 
3. **Why**: Users can navigate and read individual blog.

--- 

1. **Where**: `app/components/Newsletter.tsx`.
2. **What**: Moved the stay updated component to the footer so its visible in all routes also added validation for email.
3. **Why**: Subscribe option is now visible in all components.

---

1. **Where**: `app/components/FontShoawCase.tsx`.
2. **What**: Added appropriate key, added a copy button so user can copy the font. 
3. **Why**: To provide identity to each item in the list.

--- 
1. **Where**: `app/components/Gallery.tsx`.
2. **What**: Skeleton Loader and next/image
3. **Why**: next/image optimizes image loading, loading skelteon improves perceived performace

---
1. **Where**: `app/components/page.tsx`.
2. **What**: Added a route for contact us with validation
3. **Why**: Contact page was missing and /contact was added in the pricing component.

---
1. **Where**: `app/data/dummy-data.ts`.
2. **What**: Moved all the dummy data in one file
3. **Why**: Makes it easier to segregate code with data. 

--- 
1. **Where**: `app/components/AppBar.ts`.
2. **What**: Added Tutorials in the Navbar
3. **Why**: Makes it easier for user to navigate to Tutorials.


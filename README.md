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
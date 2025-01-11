# Next.js 15 Client-Side Fetch Error

This repository demonstrates a common runtime error encountered in Next.js 15 applications when performing data fetching within client components.  The error occurs because the `fetch` call is made client-side, resulting in a runtime error instead of a server-side data fetch.

## Problem

The `pages/about.js` component uses `fetch` to retrieve data from the `/api/data` endpoint.  However, this fetch call is executed on the client side, causing the error.

## Solution

The solution involves using `getServerSideProps` or `getStaticProps` (depending on the data's nature) to fetch data on the server, passing it as props to the About component. This ensures data is available before the component renders client-side.  See `pages/aboutSolution.js` for a corrected implementation.
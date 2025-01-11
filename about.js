```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a runtime error because the fetch is done on the client-side
  // rather than on the server-side.
  const data = await fetch('/api/data');
  const json = await data.json();
  
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call
  const data = {
    message: 'Data from the API',
  };
  res.status(200).json(data);
}
```
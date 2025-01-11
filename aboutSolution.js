```javascript
// pages/aboutSolution.js

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
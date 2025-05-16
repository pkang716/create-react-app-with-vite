import { useEffect, useState } from 'react';

export default function CatFact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact));
  }, []);

  return (
    <div>
      <h3>🐈 Cat Fact</h3>
      <p>{fact}</p>
    </div>
  );
}

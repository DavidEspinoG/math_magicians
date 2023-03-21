import '../styles/Quote.css';
import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = 'https://api.api-ninjas.com/v1/quotes';
  useEffect(() => {
    const getQuote = async () => {
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'hqxHIYiD8V1PTtDz2+o/wg==bzF7kwxHgwC0Js6B',
          },
        });
        const data = await res.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        console.log(data[0].quote);
        setLoading(false);
        setError(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log('ups');
      }
    };
    getQuote();
  }, []);
  return (
    <div>
      <p className="quote">{quote}</p>
      <p className="author">{author}</p>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="loading">Something went wrong, please refresh the page 🤕</p>}
    </div>
  );
};

export default Quote;

import React, { useState, useEffect } from 'react';
import quotesData from './quotes.json';
import './App.css';

function App() {
  const [quotes] = useState(quotesData);
  const [current, setCurrent] = useState(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  });
  const [dark, setDark] = useState(() => localStorage.getItem('dqg-dark') === 'true');

  useEffect(() => {
    localStorage.setItem('dqg-dark', dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  function newQuote() {
    if (!quotes || quotes.length === 0) return;
    let next = current;
    while (quotes.length > 1 && next.quote === current.quote) {
      next = quotes[Math.floor(Math.random() * quotes.length)];
    }
    setCurrent(next);
  }

  async function copyQuote() {
    const text = `"${current.quote}" — ${current.author}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        alert('Quote copied to clipboard!');
      } catch (err) {
        fallbackCopy(text);
      }
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
      alert('Quote copied to clipboard!');
    } catch (err) {
      alert('Unable to copy. Select and copy manually.');
    } finally {
      document.body.removeChild(el);
    }
  }

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <header className="header">
        <h1 className="title">Daily Quote Generator</h1>
        <div className="theme-toggle">
          <label className="toggle">
            <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
            <span>{dark ? 'Dark' : 'Light'}</span>
          </label>
        </div>
      </header>

      <main className="main">
        <div className="quote-card" role="region" aria-live="polite">
          <p className="quote">“{current.quote}”</p>
          <p className="author">— {current.author}</p>

          <div className="controls">
            <button className="btn" onClick={newQuote}>New Quote</button>
            <button className="btn outline" onClick={copyQuote}>Copy Quote</button>
          </div>
        </div>
      </main>

     <div className="footer">
      <footer >
        <p>Developed by Ak Bunu • {new Date().getFullYear()}</p>
      </footer>
      </div> 
    </div>
  );
}

export default App;

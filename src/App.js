import React, { useState } from 'react';
import data from './data';
function App() {
  const [number, setNumber] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);
  

  const submitButton = (e) => {
      e.preventDefault();
    let amount = parseInt(number);
    if (number <= 0) amount = 1;
    if (number > 8) amount = 8;
    
    setParagraphs(data.slice(0, amount));
	};

  return (
		<section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitButton}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" value={number} onChange={(e)=> setNumber(e.target.value)} />
        <button className="btn" type="submit" onClick={submitButton}>generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map( (paragraph,index) => { 
          return <p key={index}>{ paragraph }</p>
        }) }
      </article>
		</section>
	);
}

export default App;

import React, { useState } from 'react';
import data from './data';
import AddCopy from './Addcopy';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const arrayLength=data.length-1;
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > arrayLength) {
      amount = arrayLength;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3>Quotes By Some Famous Figure</h3>
      <form className='input-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Number of quotes:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='input-text'>
        {text.map((item, index) => {
          return <div key={index}><AddCopy copyText={item} /></div>;
        })}
      </article>
    </section>
  );
}

export default App;

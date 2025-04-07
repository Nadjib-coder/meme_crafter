import { useState, useEffect } from 'react';

export default function Main() {
  const [meme, setMeme] = useState({
    topText: 'top text',
    buttonText: 'buttom text',
    imageUrl: 'http://i.imgflip.com/1bij.jpg',
  });
  return (
    <main>
      <h3>Welcome to the Meme Crafter Website</h3>
      <form>
        <div className="input-row">
          <label>
            Top Text
            <input></input>
          </label>
          <label>
            Bottom Text
            <input></input>
          </label>
        </div>
        <button>Get a new meme image</button>
      </form>
      <div className="meme">
        <img src={meme.imageUrl}></img>
        <span className="top-text">{meme.topText}</span>
        <span className="buttom-text">{meme.buttonText}</span>
      </div>
    </main>
  );
}

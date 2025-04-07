import { useState, useEffect } from 'react';

export default function Main() {
  const [meme, setMeme] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imageUrl: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImage, setAllMemeImage] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemeImage(data.data.memes));
  }, []);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function getRandomImage() {
    const randomImage = Math.floor(Math.random() * allMemeImage.length);
    setMeme((prev) => ({
      ...prev,
      imageUrl: allMemeImage[randomImage].url,
    }));
  }

  return (
    <main>
      <h3>Welcome to the Meme Crafter Website</h3>
      <div className="form">
        <div className="input-row">
          <label>
            Top Text
            <input
              type="text"
              name="topText"
              placeholder="One does not simply"
              onChange={handleChange}
              value={meme.topText}
            ></input>
          </label>

          <label>
            Bottom Text
            <input
              type="text"
              name="bottomText"
              placeholder="Walk into Mordor"
              onChange={handleChange}
              value={meme.bottomText}
            ></input>
          </label>
        </div>
        <button onClick={getRandomImage}>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl}></img>
        <span className="top-text">{meme.topText}</span>
        <span className="buttom-text">{meme.bottomText}</span>
      </div>
    </main>
  );
}

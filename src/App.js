import React, { useState } from 'react';
import './App.scss';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
var randomHexColor = require('random-hex-color')

const initialData = [
  {
    data: {
      bpm: 0.7,
      duration: 0.8,
      key: 0.9,
      genre: 0.67,
      popularity: 0.8,
      mood: 0.4
    },
    meta: { color: randomHexColor() },
    title: 'The Hokey Pokey'
  },
  {
    data: {
      bpm: 0.7,
      duration: 0.8,
      key: 0.9,
      genre: 0.67,
      popularity: 0.8,
      mood: 0.4
    },
    meta: { color: randomHexColor() },
    title: 'The Bunny Hop'
  },
  {
    data: {
      bpm: 0.3,
      duration: 0.85,
      key: 0.7,
      genre: 0.43,
      popularity: 0.65,
      mood: 0.6
    },
    meta: { color: randomHexColor() },
    title: 'The Limbo Song'
  },
  {
    data: {
      bpm: 0.99,
      duration: 0.2,
      key: 0.15,
      genre: 0.5,
      popularity: 0.55,
      mood: 0.3
    },
    meta: { color: randomHexColor() },
    title: 'Macarena'
  },
];

const captions = {
  // columns
  bpm: 'Beats per minute',
  duration: 'Duration',
  key: 'Key',
  genre: 'Genre',
  popularity: 'Popularity',
  mood: 'Mood'
};

const App = () => {
  const [data, setData] = useState(initialData);
  const [songInput, setSongInput] = useState({
    bpm: 0,
    duration:0,
    key: 0,
    genre: 0,
    popularity: 0,
    mood: 0,
    title: ''
  },);

  const handleChange = e => {
    setSongInput({...songInput, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    let formattedData = {
      data: {
        bpm: songInput.bpm,
        duration: songInput.duration,
        key: songInput.key,
        genre: songInput.genre,
        popularity: songInput.popularity,
        mood: songInput.mood
      },
      meta: { color: randomHexColor() },
      title: songInput.title  
    }
    console.log(formattedData);
    setData([...data, formattedData]);
  }

  return  (
    <div className='App'>
      <header>
        <h1>Radar Chart Creator</h1>
      </header>
      <div className='data-display'>
        <div>
          <RadarChart
            captions={captions}
            data={data}
            size={600}
            />
          </div>
          <div className='song-list'>
            <h2>Tracks</h2>

            {data.map((item, index) => <h3 key={index} style={{color: item.meta.color}}>{index+1}. {item.title}</h3>)}
            
            <form onSubmit={handleSubmit}>
              <legend>
                Add Song
              </legend>
              <div>
                <label htmlFor='title'>Song Title: </label>
                <input type='text' 
                  name='title' 
                  id='title' 
                  onChange={handleChange} 
                  value={songInput.title}
                />
              </div>

              <div>
                <label htmlFor='bpm'>BPM: </label>
                <input type='number'
                  min='0'
                  step='0.01'
                  max= '1' 
                  name='bpm' 
                  id='bpm' 
                  onChange={handleChange} 
                  value={songInput.bpm}
                />
              </div>

              <div>
                <label htmlFor='duration'>duration: </label>
                <input type='number'
                  min='0'
                  step='0.01'
                  max= '1' 
                  name='duration' 
                  id='duration' 
                  onChange={handleChange} 
                  value={songInput.duration}
                />
              </div>

              <div>
                <label htmlFor='key'>key: </label>
                <input type='number'
                  min='0'
                  step='0.01'
                  max= '1' 
                  name='key' 
                  id='key' 
                  onChange={handleChange} 
                  value={songInput.key}
                />
              </div>

              <div>
                <label htmlFor='genre'>BPM: </label>
                <input type='number'
                  min='0'
                  step='0.01'
                  max= '1' 
                  name='genre' 
                  id='genre' 
                  onChange={handleChange} 
                  value={songInput.genre}
                />
              </div>

              <div>
                <label htmlFor='popularity'>Popularity: </label>
                <input type='number'
                  min='0'
                  step='0.01'
                  max= '1' 
                  name='popularity' 
                  id='popularity' 
                  onChange={handleChange} 
                  value={songInput.popularity}
                />
              </div>

              <div>
                <label htmlFor='mood'>Mood: </label>
                <input type='number'
                  min='0'
                  step='0.01'
                  max= '1' 
                  name='mood' 
                  id='mood' 
                  onChange={handleChange} 
                  value={songInput.mood}
                />
              </div>

              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default App;
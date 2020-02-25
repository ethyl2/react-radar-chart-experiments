import React from 'react';
 
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
var randomHexColor = require('random-hex-color')

const data = [
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
  return  (
    <div>
      <div>
        <RadarChart
          captions={captions}
          data={data}
          size={750}
          />
        </div>
        <div>
          {data.map((item, index) => <h2 style={{color: item.meta.color}}>{index+1}. {item.title}</h2>)}
        </div>
      </div>
    );
}
 
export default App;
import React, {useState, useEffect} from 'react';
import './App.css';
import News from './components/News/News';
import Charts from './components/Charts/Charts';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([])
  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=76ee43e1e8634f4094a3bf04fc45b5a3')
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // }, [])
  useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=76ee43e1e8634f4094a3bf04fc45b5a3';
    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      <Charts></Charts>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;

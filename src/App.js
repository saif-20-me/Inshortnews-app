
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navinshorts from './components/Navinshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, SetNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);


  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);
      setNewsArray(news.data.articles);
      SetNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore]);
  return (
    <div className="App">
      <Navinshorts setCategory={setCategory} />
      <NewsContent
        setLoadmore={setLoadmore}
        loadmore={loadmore}
        newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import News from '../News/News';
import './App.scss';

const API_KEY = '634c025c124f4790a919fb1e0a11935e';

function App() {
  const [country, setCountry] = useState({ value: 'US', label: 'United State' });
  const [favMode, setFavMode] = useState(false); // false: show all news ; true: show favorite news
  const [newsList, setNewsList] = useState(false);

  const getData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${API_KEY}`;
    let newsList = await axios.get(url);
    if (newsList.data.status === 'ok') {
      setNewsList(newsList.data.articles)
    } else {
      console.log('Handle Error');
    }
  }
  useEffect(() => {
    getData()
  }, [JSON.stringify(country)])

  const updateFavorite = (news) => {
    let tempList = JSON.parse(JSON.stringify(newsList));
    tempList.map(item => {
      // filter and add a property for mark favorite
      // chose the url property to mark the item because the url is unique
      if (item.url === news.url) {
        item.favorite = !item.favorite;
      }
    })
    setNewsList(tempList);
  }

  return (
    <div className="app">
      <Header favMode={favMode} setFavMode={setFavMode} country={country} setCountry={setCountry} />
      {
        newsList && newsList.map((item, index) => {
          // Just show the news has the image
          if (item.urlToImage) {
            if (favMode) {
              // just show the favorite news in favorite mode
              if (item.favorite) {
                return <News updateFavorite={updateFavorite} key={index} data={item} />
              }
            } else {
              // show all news in normal mode
              return <News updateFavorite={updateFavorite} key={index} data={item} />
            }
          }
        })
      }
    </div>
  );
}

export default App;

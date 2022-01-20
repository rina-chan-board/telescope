import React from 'react';
import larrow from './larrow.svg';
import rarrow from './rarrow.svg';
import expand from './expand.svg';
import './App.css';
import Nav from './Nav.js';
import LikesPage from './LikesPage';
import About from './About.js'
import MainPicture from './MainPicutre.js';


import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useLocalStorage } from './useLocalStorage';


function App() {


  const [likes, setLikes] = useLocalStorage("likes", [])

  const handleClear = (key, defaultValue) => {
    setLikes([])
    localStorage.setItem(key, JSON.stringify(defaultValue))
}

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));

  }, [likes])

  const [data, setData] = useState([])


  const currentdate = new Date();
  const [startdate, setStartdate] = useState(new Date())

  const baseurl = 'https://api.nasa.gov/planetary/apod?api_key=lGR7Az4kXbuEOgUTHQqro4aGl3Km3eJ15bS6I7f2&date='

  useEffect(() => {
    getPic(startdate, 0)
}, []);

const fixDate = () => {
  startdate.setTime(startdate.getTime() - (startdate.getTimezoneOffset() * 60000));
  return startdate.toISOString()
}

const getPic = (startdate, datechange) => {

  startdate.setDate(startdate.getDate() + datechange)
  let url = baseurl + fixDate(startdate).slice(0,10)

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json)
    } catch (error) {
      console.log("err:", error);
    }
  };

  fetchData();
}


  return (
    <div className="App">
    
    <div className="bg"><div className="outercircle"></div><div className="circle"></div></div>
{/* 
    <div className="smallstar smallstar1"></div>
    <div className="smallstar smallstar2"></div>
    <div className="smallstar smallstar3"></div>
    <div className="smallstar smallstar4"></div>
    <div className="smallstar smallstar5"></div>
    <div className="smallstar smallstar6"></div> */}
    



    {/* <div className="smallstar smallstar1"></div>
    <div className="smallstar smallstar1"></div>  */}


    <Router>
      <Nav handleClear={handleClear}/>

      <Switch>

        <Route exact path="/likes">
          <div className="content">
            <LikesPage likes={likes}/>
          </div>
        </Route>

        <Route exact path="/about">
          <div className="content">
            <About/>
          </div>
        </Route>

        <Route exact path="/*">

          <div className="content">
            {startdate.getDate() === currentdate.getDate()  
            && startdate.getMonth() === currentdate.getMonth()
            && startdate.getFullYear() === currentdate.getFullYear()
            
            ? <div style={{backgroundImage: "url("+larrow+")", opacity: "20%"}} className="disabledarrowbutton"></div>
            : <div style={{backgroundImage: "url("+larrow+")"}} className="incrementdate arrowbutton" onClick={() => {getPic(startdate, 1)}}></div>
          }

              <MainPicture data={data} likes={likes} setLikes={setLikes}/>
            <div style={{backgroundImage: "url("+rarrow+")"}} className="decrementdate arrowbutton" onClick={() => {getPic(startdate, -1)}}></div>

            <a style={{backgroundImage: "url("+expand+")"}} target="_blank" href={data.url} className="expand"></a>

          </div>

        </Route>

      </Switch>

    </Router>

<div className="noise"></div>
    </div>
  );
}

export default App;

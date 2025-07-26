import React from 'react';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar'
import Video from './components/Video';

// import ChannelRow from './components/ChannelRow';
import SearchPage from './components/SearchPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm" >
         
           <div className="app__page">
                  <Sidebar />
                   <SearchPage />
                   {/* <ChannelRow/> */}
                   
              </div>
            
          </Route>
           
          <Route path="/">
           
             <div className="app__page">
                  <Sidebar />
                   <Video />
              </div>
          </Route>
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;

      
  
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/articles-list" component={ArticlesListPage}/>
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    )  
  } 
}

export default App;

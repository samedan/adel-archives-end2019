import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import axios from 'axios';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import Post from './pages/post';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';

axios.defaults.baseURL =
  'https://nameless-spire-17852.herokuapp.com/api/bien_archives';
axios.defaults.headers.common['x-auth-token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRmN2FjYzczZGE1ZWIzZWE4NjQyZmUwIn0sImlhdCI6MTU3NzE5OTMwNCwiZXhwIjoxNTc3NTU5MzA0fQ.QhOumGZNB8pO0qhr0GZwG2P8d1121ALk_uUMcEnblbQ';
axios.defaults.headers.common['Content-Type'] = 'application-json';

function App() {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // get all users
  const getPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/bien_archives');
      // console.log(res.data);

      if (res) {
        if (!loading) {
          setPosts(res.data);
        }

        // console.log('resdataApp= ');
        // console.log(res.data);
        // console.log('postsApp= ');
        // console.log(posts);
        setLoading(false);
      } else {
        setLoading(true);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  return (
    <Router>
      <Navbar />
      <div className="row">
        <div className="col">
          {loading ? (
            <Fragment>Loading...</Fragment>
          ) : (
            <Sidebar posts={posts} />
          )}
        </div>
        <div className="col">
          <div className="container">
            <Route exact path="/" component={Home} posts={posts} />
            <Route path="/:type/:id" component={Post} posts={'cur'} />

            <Route exact path="/about" component={About} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

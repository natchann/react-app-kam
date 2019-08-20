import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img className='logo-img' src='https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg' />
      </header>
      <nav className='nav'>
        <div><a href='#s'>Profile</a></div>
        <div><a>Messaged</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://klike.net/uploads/posts/2018-12/1544870354_1.jpg' />
        </div>
        <div>
          <img className ="ava-img" src='http://andrey-eltsov.ru/wp-content/uploads/2017/09/DsSd-Stim_hfhdY_jf-jfY-%D0%A5%D0%B0%D1%81%D0%BA%D0%B8.jpg' />
          Avatar + description
      </div>
        <div>
          My posts
        <div>
          New post
        </div>
        <div>Post 1</div>
        <div>Post 2</div>
        </div>


      </div>
    </div>
  );
}

export default App;

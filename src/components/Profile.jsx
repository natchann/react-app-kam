import React from 'react';

const Profile = () => {
  return (
    <div className='content'>

      <div>
        <img src='https://klike.net/uploads/posts/2018-12/1544870354_1.jpg' />
      </div>

      <div>
        <img className="ava-img" src='http://andrey-eltsov.ru/wp-content/uploads/2017/09/DsSd-Stim_hfhdY_jf-jfY-%D0%A5%D0%B0%D1%81%D0%BA%D0%B8.jpg' />
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
  );
}

export default Profile;
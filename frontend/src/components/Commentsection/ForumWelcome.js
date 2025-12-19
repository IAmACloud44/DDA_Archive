import React from 'react';

function ForumWelcome() {
  return (
    <div>
        <h1>Welcome to the Forums!!</h1>
        <section className='welcomeforum'>
            <p>Here you find the past forums from our old site! Do take a look around and find theories, conspiracies and other people you like!</p>
            <p>We do apologize for the limited account options, sadly due to our old servers all being wiped and destroyed, we cannot allow a huge amount of people to create new accounts :(</p>
            <h2>How it works:</h2>
            <p>On the left you can find all the forums talking about the stories we featured on this site. Every entry automatically results in a discussion forum.</p>
            <li> &larr; On the left side you can see all the forums, click on them and join the discussion!</li>
        </section> 
            <hr/>
        <div className='news'>
            <img className="newsgif" src={process.env.PUBLIC_URL + '/news.gif'}  alt="" />
            <p className='news'>Under construction</p>
            <img className="newsgif" src={process.env.PUBLIC_URL + '/news.gif'}  alt="" />
        </div>
    </div>
  );
}

export default ForumWelcome;

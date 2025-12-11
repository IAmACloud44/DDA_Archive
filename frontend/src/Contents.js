import React from 'react';
import Return from './Return.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

function Contents() {
  return (
  <div>
    <div className="textbox">
      <h1>---[Newest Additions]---</h1>
      <h2>Brownsberry Incident</h2>
      <hr />
      <a href="#/contents" onClick={() => window.location.reload()}>Newscast of '56</a>
      <br />
      <a href="#/contents" onClick={() => window.location.reload()}>Police Records</a>
      <br />
      <br />
      <div className="textbox">
        <h1>---[Table of Contents]---</h1>
        <table>
          <tr>
            <td>Brownsberry Incident:</td>
            <td><a href="#/contents" onClick={() => window.location.reload()}>Newscast of '56</a></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td><a href="#/contents" onClick={() => window.location.reload()}>Police Records</a></td>
          </tr>
        </table>
      </div>
    </div>
    <Return/>
    <div className='wrapper'>
        <Footer />
    </div>
    </div>
  );
}

export default Contents;

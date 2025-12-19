import React from 'react';
import Return from '../components/Return.js';
import Footer from '../components/Footer.js';
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
          <tbody>
            <tr>
              <td>
                <Link to="/brownsberrycounty">Brownsberry Incident:</Link>
              </td>
              <td>Newscast of '56</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>Police Records</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Return/>
    <Footer />
  </div>
  );
}

export default Contents;
import React from 'react';
import Return from '../components/Return';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="news">
                <img className="newsgif" src={process.env.PUBLIC_URL + '/news.gif'} alt="" />
                <p>The Forum will be fully transferred from the old site! 
                    <br></br>
                The login system has not been implemented yet, please wait :)</p>
                <img className="newsgif" src={process.env.PUBLIC_URL + '/news.gif'} alt="" />
            </div>
            <br/>
            <div className='homebox'>
                <section className="welcome_menu">
                    <h1>New Additions</h1>
                        <ul>
                            <li><Link to="/contents">Brownsberry Incident</Link></li>
                        </ul>
                </section>
                <section className="welcome_main">
                    <h1>Welcome to the DarkDragonArchives!</h1>
                    <img src={process.env.PUBLIC_URL + '/dragondeeznuts.png'}  alt="" />
                    <p>
                        Here at the DDA, we preserve various crazy stories found all over the world! From mysterious sightings to
                        unsolved cases aired as public media, then subsequently forgotten due to time; all of them have a place to
                        stay and remain in the spotlight at the DDA! We try to collect stories in full and never leave out any
                        interesting parts! This results in a huge <Link to="/contents">library</Link> filled with videos, audios,
                        newspaper clippings and pictures already storing history reaching as far back as to the year 1929.
                        <br />
                        <br />
                        A new story is added every time there is one found. Prior, we go through vigorous screening before posting
                        anything on this site as with every entry we try to add as much context as we can. It takes some time to
                        gather even a small bit of media, so please excuse us for any long periods between updates. We try to get
                        all the media we can find in one go so the whole picture can be presented at once.
                        <br />
                        <br />
                        The type of lost media we gather varies across the board. Unsolved mysteries with no publicly presented
                        conclusion are usually our priority. Sometimes we immediately find the solution or get hints through our
                        research, which then makes for nice, well-rounded stories. But those are far in between and very rare to
                        come by.
                    </p>
                </section>
            </div>
            <Return />
            <Footer />
        </div>
    );
}

export default Home;

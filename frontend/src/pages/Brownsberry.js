import React from "react";
import Footer from "../components/Footer";
import Return from "../components/Return";
import brown from "../assets/brown.mp4"


function Brownsberry() {
    return (
        <div>
            <div className="textbox">
                <h1>Brownsberry Incident - 1955 Brownsberry County</h1>
                <br/>
                <ul>
                    <li>Radio Broadcast 1956; unknown radio hoast</li>
                    <li>
                        <video width="320" controls>
                            <source src={brown} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> 
                    </li>
                </ul>
                <p>The AM station is apparently not a serious one and was one of the first "politicized" ones from that era. Small radio fact; FoxNews and all other media that is nowadays very clearly political, came from this trend. News stations, big ones, realized that not just talking about the news, but also polarizing people, brought in more listeners, so they accumilated wealth, accumilated more radio channels and got so big that a proposed law, one that would forbid newschannels to be overly political, didn't even get passed because of the huge impact these radio and news shows have had.</p>
                <br/>
                <br/>
                <br/>
                <div className="news">
                    <img className="newsgif" src={process.env.PUBLIC_URL + '/news.gif'}  alt="" />
                    <p className=''>More to come</p>
                    <img className="newsgif" src={process.env.PUBLIC_URL + '/news.gif'}  alt="" />
                </div>
            </div>
            <Return />
            <Footer />
        </div>
    );
};

export default Brownsberry;
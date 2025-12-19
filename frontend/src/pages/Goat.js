import React from 'react';
// import Return from '../components/Return';
// import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Goat() {
    return (
        <div className='GOAT'>
            <h1>GOATS</h1>
            <h2>13.12.2025</h2>
            <p>i DONT know what is happening out here, but SOMETHING is going on, I can't prove it yet, butthere is a thing out there. It tries to be a goat, but it ISN't. ITS A DEMON, something unholy, something unexplained. I will find it and I will kill it, I swear on my life, I've been made for this. I am its enemy I am the van Helsing to the Dracula and I WILL DESTROY IT. I MUST DO IT, IT IS THE ONLY WAY TO SAVE THE WORLD PLEASE BELIEVE ME THIS ISNT RIGHT, SATAN IS WINNING</p>
            <img className="goat1" src={process.env.PUBLIC_URL + '/Screenshot from 2025-12-12 00-54-14.png'} alt="" />
            <img className="goat1" src={process.env.PUBLIC_URL + '/Screenshot_2025-12-12_00-53-49.png'} alt="" />
            <p>This is sick and twisted, the devil has krept into our reality, it is tricking young minds, poisoning them to be sympathetic to the evils of this world DO NOT LET THEM FOOL YOU, IT IS THE DEVIL'S WORK. A CREATURE OF SIN AND IT WILL MAKE YOU SIN TOO</p>
            <p>KEEP AWAY AT ALL COSTS</p>
            <Link to={"/"} style={{color:"grey"}}>THERE IS NO RETURNING</Link>
        </div>
    );
}

export default Goat;
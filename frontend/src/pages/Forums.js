import React, { useState } from 'react';
import App from '../components/Commentsection/App';
import Footer from '../components/Footer';
import ForumWelcome from '../components/Commentsection/ForumWelcome';


// The Forums start with a News Site before you go to the actual forums conatined in the right hand side menu
function Forums() {
    // State to manage the currently displayed content
    const [currentContent, setCurrentContent] = useState('welcome');
    // State to manage the active button
    const [activeButton, setActiveButton] = useState('');

    // For menu button clicks, wanted to make them stand out when active
    function handleButtonClick(content) {
        setCurrentContent(content);
        setActiveButton(content);
    }

    // Styles for buttons
    const buttonStyles = {
        default: { color: 'black'},
        active: { color: 'white', backgroundColor: 'grey' }
    };

    return (
        <div className='forum'>
            <div className="container">
                <div className="left">
                  <hr/>
                  <ul>
                    <button 
                        onClick={() => handleButtonClick('brownsberry')} 
                        style={activeButton === 'brownsberry' ? buttonStyles.active : buttonStyles.default}>
                          Brownsberry Incident
                    </button>
                    {/* <button 
                        onClick={() => handleButtonClick('event2')} 
                        style={activeButton === 'event2' ? buttonStyles.active : buttonStyles.default}>
                        event2
                        
                    </button> */}
                    </ul>
                  <hr/>
                </div>
                <div id='content' className="right">
                    {/* Conditional rendering based on currentContent state */}
                    {currentContent === 'welcome' && <ForumWelcome/>}
                    {currentContent === 'brownsberry' && <App/>}
                    {/* {currentContent === 'event2'&& <p>Event2</p>} */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Forums;

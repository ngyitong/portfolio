import './foot.css';
import '../pages/App.css'
import React from 'react';

function Foot(){
    return(
        <footer className="foot">
            <div className="flex-container-row">

                <div className="small-font">
                Background photo by
                    <a className="app-link small-font"
                        href="https://unsplash.com/@sametomorrow?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Adam Chang
                    </a>

                    on
                    <a className="app-link small-font"
                        href="https://unsplash.com/photos/snow-field-and-green-pine-trees-during-daytime-IWenq-4JHqo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Unsplash
                    </a>
                
                </div>
            </div>
        </footer>
    )
}

export default Foot;
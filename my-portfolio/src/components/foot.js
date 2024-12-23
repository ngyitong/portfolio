import './foot.css';
import '../pages/App.css'
import React from 'react';

function Foot(){
    return(
        <footer className="foot">
            <div className="flex-container-row">
                <div className="heading-font">My Links</div>
                <div className="flex-break"></div>

                <a
                    className="links-font"
                    href="https://github.com/PlacidPlaty"
                    // prevent new page from using JS to modify or redirect the original page
                    rel="noopener noreferrer"
                    // opens link in a new tab or window
                    target="_blank"
                    >
                    GitHub
                </a>

                <a
                    className="links-font"
                    href="https://www.linkedin.com/in/ng-yi-tong/"
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                    LinkedIn
                </a>

                <div className="flex-break"></div>

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
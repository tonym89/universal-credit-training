import React from 'react';

function NavButtons(){
    return (
        <div>
            <nav>
                <ul className="Nav-list">
                <li className="Nav-button">
                    <a href="/dashboard" className="Nav-button-link">
                        Home
                    </a>
                </li>
                <li className="Nav-button">
                    <a href="/to-do" id="to-do-tab" className="Nav-button-link">
                        To-do list
                    </a>
                </li>
                <li className="Nav-button">
                    <a href="/journal" className="Nav-button-link" style={{marginRight:"0px"}}>
                        Journal
                    </a>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavButtons;
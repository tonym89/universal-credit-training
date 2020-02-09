import React from 'react';

function NavButtons(){
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    return (
        <div>
            <nav>
                <ul className="Nav-list">
                <li className="Nav-button">
                    <a href="/dashboard" onClick={handleClick}  className="Nav-button-link">
                        Home
                    </a>
                </li>
                <li className="Nav-button">
                    <a href="/to-do" onClick={handleClick} id="to-do-tab" className="Nav-button-link">
                        To-do list
                    </a>
                </li>
                <li className="Nav-button">
                    <a href="/journal" onClick={handleClick} className="Nav-button-link" style={{marginRight:"0px"}}>
                        Journal
                    </a>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavButtons;
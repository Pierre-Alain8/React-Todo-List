import React from 'react';


class Filtre extends React.Component {
    render() {
        // const {buttonFilterdone}

        return (
        <div className="filtresButton">
            <button className="filtreButton"
                // oncClick = {buttonFilterdone }  
            >ALL
            </button>
            <button className="filtreButton">DONE ONLY</button>
            <button className="filtreButton">NOT DONE ONLY</button>
        </div>
        );
    }
}

export default Filtre;

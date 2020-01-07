import React from 'react';


class Filtre extends React.Component {
    render() {

        const {filterAll, filterDone, filterNotDone} = this.props

        return (
        <div className="filtresButton">
            <button className="filtreButton"
                onClick={filterAll }  
            >ALL

            </button>

            <button className="filtreButton"
                onClick={filterDone } 
            >DONE ONLY

            </button>

            <button className="filtreButton"
                onClick={filterNotDone }
            >NOT DONE ONLY

            </button>
        </div>
        );
    }
}

export default Filtre;

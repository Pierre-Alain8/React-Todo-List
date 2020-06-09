import React from 'react';



class InputForm extends React.Component {

            
    render() {
        const {valeur} = this.props
        const {handleSubmit} = this.props
        const {handleChange} = this.props
        // definition des propriétés propre au inputForm, les noms doit être conformes à se qu'on recherche

        return (
        <div className="inputForm">
            <form onSubmit={handleSubmit }> 

                <input  
                    onChange={handleChange} 
                    value={valeur}
                    // onKeyDown={onKeyEnter}
                    type="text"  
                    placeholder="nouvelle task">
                </input>

                {/* Déclaration des propriétes afin de récupéer les valeurs de l'input */}
                <button className="addButton"type="submit">ADD</button>
            </form>
        </div>

        );
    }


}

export default (InputForm);
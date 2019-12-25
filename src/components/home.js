import React from 'react';
import { withRouter} from 'react-router-dom';
import Title from './title';
import InputForm from './inputForm';
import List from './list';
import '../../src/main.css';
import Filtre from './filtre';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            tasks: [], 
        }



        // les binds 
        this.handleChange = this.handleChange.bind(this)
        this.addTasks = this.addTasks.bind(this)
        this.doneTasks = this.doneTasks.bind(this)
        this.deleteTasks = this.deleteTasks.bind(this)
        this.saveTasksToLocalStorage = this.saveTasksToLocalStorage.bind(this)
        this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this)
        // this.filterDone = this.filterDone.bind(this)
    }

    
    handleChange = (event) => {
        this.setState({inputValue: event.target.value});

   };
   // Je capte les données de l'input et du talbeau tasks grâce à la fonction oneChange qui sera rappelé dans le render

    addTasks = (event) => {
       event.preventDefault()
       const newtasks = {id : Date.now(), inputValue : this.state.inputValue, done : false}

       let tasks = [...this.state.tasks, newtasks] 
       console.log(newtasks.id)
        //expose le tableau de départ et crée une nouvelle entrée dans le tableau : le newTasks
        
       
       console.log(tasks)
       // indexOf retourne le premier indice d'une tasks ajouté dans un tableau

       this.setState({
           tasks, 
           inputValue: " "},
           this.saveTasksToLocalStorage
        //    On rapelle cette méthode pour chaque mise à jour du state à l'ajout d'une task
       );
       // Maj du tableau
    };

    doneTasks = (id) => {

        const tasks = [...this.state.tasks]
        tasks[id].done = !tasks[id].done 

        this.setState({
            tasks
        });



    };

    deleteTasks = (taskId) => {
        // alert("Button Clicked!")
        const tasks = this.state.tasks.filter(task => task.id !== taskId);
        this.setState({
            tasks
        });

        console.log(tasks)
    };

    saveTasksToLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(this.state))
    }
    // On convertit le state tasks du component Home en chaîne de caractères pour qu'il soit sauvgardé dans le local Storage

    saveStateToLocalStorage() {
        const state = localStorage.getItem('state')
        if (state) {
          this.setState(JSON.parse(state))
        }
      }
    // Grâce à cette méthode, lorsque que ce component est chargé on récupère la valeur du state

    filterDone(id) {
        const tasksDone = this.state.tasks.filter(task => task.done)
    }


   


    
    
    
    render() {



        return (
            
            <div className="mainTodo">
                <Title name="TODO LIST PIERRE-ALAIN" />
                <InputForm 
                    valeur={this.state.inputValue } 
                    handleChange={this.handleChange } 
                    handleSubmit={this.addTasks }
                    onKeyEnter={this.handleKeyDown }
                 
                />

                <div className="tableTodo">
                    <ul>  
   
                        {
                        this.state.tasks.map((item, index) => { 
                            
                            return(
                        
                                
                                    <List 
                                    
                                        key={item.id}
                                        taskId={item.id } 
                                        taskValue={item.inputValue } 
                                        dataDone={item.done }
                                        taskDone={ () => this.doneTasks(index) }
                                        taskDelete={this.deleteTasks }
                                        
                                    />
                            
                            
                    
                            )}) 
                    
                        }
                    </ul>

                </div>
            {/* Je réalise un .map() sur le state tasks pour récupérer chaque élément de ce tableau. 
             .map() retourne le components list avec les éléments qu'il contient */}
                <Filtre  
                //   buttonFilterdone={this.filterDone }    
                />
            </div>
        );
    }
}

export default withRouter(Home);































 // handleKeyDown = (event) => {
    //     event.preventDefault()
        
    //    if (event.key === "Enter") {
    //     const newtasks = {id : Date.now(), title : this.state.inputValue, done : false}

    //     let tasks = [...this.state.tasks, newtasks] 

    //     this.setState({
    //         tasks, 
    //         inputValue: " "
    //     })
           
    //    }
    // }
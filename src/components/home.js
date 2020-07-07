import React from "react";
import { withRouter } from "react-router-dom";
import Title from "../../../../../ReactToDo/src/components/Title";
import InputForm from "../../../../../ReactToDo/src/components/InputForm";
import List from "../../../../../ReactToDo/src/components/List";
import "../../src/main.css";
import Filtre from "../../../../../ReactToDo/src/components/Filtre";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      tasks: [],
      filtred: [],
    };

    // les binds
    this.handleChange = this.handleChange.bind(this);
    this.addTasks = this.addTasks.bind(this);
    this.doneTasks = this.doneTasks.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);
    this.saveTasksToLocalStorage = this.saveTasksToLocalStorage.bind(this);
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this);
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  // Je capte les données de l'input et du talbeau tasks grâce à la fonction oneChange qui sera rappelé dans le render

  addTasks = (event) => {
    event.preventDefault();
    const newtasks = {
      id: Date.now(),
      inputValue: this.state.inputValue,
      done: false,
    };

    let tasks = [...this.state.tasks, newtasks];
    console.log(newtasks.id);
    //expose le tableau de départ et crée une nouvelle entrée dans le tableau : le newTasks

    console.log(tasks);
    // indexOf retourne le premier indice d'une tasks ajouté dans un tableau

    this.setState(
      {
        tasks,
        inputValue: " ",
      },
      this.saveTasksToLocalStorage
      //    On rapelle cette méthode pour chaque mise à jour du state à l'ajout d'une task
    );
    // Maj du tableau
  };

  doneTasks = (id) => {
    const tasks = [...this.state.tasks];
    tasks[id].done = !tasks[id].done;

    this.setState({
      tasks,
    });
  };

  deleteTasks = (taskId) => {
    // alert("Button Clicked!")
    const tasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({
      tasks,
    });

    console.log(tasks);
  };

  // On convertit le state tasks du component Home en chaîne de caractères pour qu'il soit sauvgardé dans le local Storage
  saveTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(this.state));
  };

  // Grâce à cette méthode, lorsque que ce component est chargé on récupère la valeur du state
  saveStateToLocalStorage = () => {
    const state = localStorage.getItem("state");
    if (state) {
      this.setState(JSON.parse(state));
    }
  };

  render() {
    return (
      <div className="mainTodo">
        <Title name="TODO LIST PIERRE-ALAIN" />
        <InputForm
          valeur={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.addTasks}
          onKeyEnter={this.handleKeyDown}
        />

        <div className="tableTodo">
          {this.state.tasks.map((item, index) => {
            return (
              <List
                key={item.id}
                taskId={item.id}
                taskValue={item.inputValue}
                dataDone={item.done}
                taskDone={() => this.doneTasks(index)}
                taskDelete={this.deleteTasks}
                onclick={this.state.tasks}
              />
            );
          })}
        </div>
        {/* Je réalise un .map() sur le state tasks pour récupérer chaque élément de ce tableau. 
             .map() retourne le components list avec les éléments qu'il contient */}
        <Filtre
          filterAll={this.filterTasks}
          filterDone={this.filterTasks}
          filterNotDone={this.filterTasks}
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

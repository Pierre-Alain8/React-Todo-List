import React, { Component } from 'react' 

class List extends Component {

    constructor(props) {
            super(props);

    //  this.selectKey = this.selectKey.bind
    }

    // selectKey(event) {
    //     const selectKeyTasks = document.getElementsByClassName("tasks")
    //     console.log(event.target.li[selectKeyTasks].getAttribute('data-id'));

    // }







    render() {

        const {taskId, taskValue, taskDone,dataDone, taskDelete} = this.props;
       
       
        
     
        return(
        
            <li  className="tasks"
                id={taskId } 
                data-done={dataDone}>

             {taskValue }

             <button onClick={taskDone} style={{display: "flex"}} className="tasksDone">Done</button>
             <button onClick={ () => taskDelete(taskId)} className="tasksDelete" >Delete</button>
            </li>

            

            

            // onclick={tasksDone}
        );
        
        
    } 
}

export default List






// doneTask = (id) => {

//     const newTasks = this.state.tasks.map(task => {

//         if(id === task.id) {
//             let task = {...task,done:true}
//         } 

//     })

        
//     // }




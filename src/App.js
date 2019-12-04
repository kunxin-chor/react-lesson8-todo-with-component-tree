import React from 'react';
import bulma from 'bulma/css/bulma.css'


import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'

class App extends React.Component {
  
  state = {
    tasks:[
      {
        _id:1,
        title:"Wash the clothes",
        done:false
      },
      {
        _id:2,
        title:"Pay the bills",
        done:false
      },
      {
        _id:3,
        title:"Buy grocery",
        done:true
      }
    ],
    currentEditedTask:{
      
    },
    editing:false
  }
  
  addNewTask = (task) => {
    
    let cloned = [...this.state.tasks, task];
    this.setState({
      tasks:cloned
    })
    
  }
  
  deleteTask = (task) => {
    let index = this.state.tasks.findIndex((t)=>{
      return t._id === task._id
    })
    
    let cloned = [...this.state.tasks];
    cloned.splice(index, 1);
    this.setState({
      tasks:cloned
    })
  }

  handleCheck = (task) => {
    
    let index = this.state.tasks.findIndex((t)=>{
      return t._id === task._id
    })
    
    let cloned = [
      ...this.state.tasks.slice(0, index),
      {
        ...this.state.tasks[index],
        done: !this.state.tasks[index].done
      },
      ...this.state.tasks.slice(index+1)
    ]
    
    this.setState({
      tasks:cloned
    })
    
  }
  
  showEdit = (task) => {
    this.setState({
      editing:true,
      currentEditedTask: {
        ...task
      }
    })
  }
  
  cancelEdit = () => {
    this.setState({
      editing:false
    })
  }
  
  confirmEdit = ( id, newTitle) => {
     let index = this.state.tasks.findIndex((t)=>{
      return t._id === id
    })
    
    let cloned = [
      ...this.state.tasks.slice(0, index),
      {
        ...this.state.tasks[index],
        title: newTitle
      },
      ...this.state.tasks.slice(index+1)
    ]
    
    this.setState({
      tasks:cloned,
      editing:false
    })
    
  }
  
  render() {
      return (
       <div className='container content'>
          <AddTask add={this.addNewTask}/>
          <TaskList tasks={this.state.tasks}
                    delete={this.deleteTask}
                    handleCheck={this.handleCheck}
                    edit={this.showEdit}
          />
          <EditTask show={this.state.editing}
                    task={this.state.currentEditedTask}
                    key={this.state.currentEditedTask._id}
                    cancel={this.cancelEdit}
                    confirm={this.confirmEdit}
          />
   
       
       </div>
      );
  }

}

export default App;

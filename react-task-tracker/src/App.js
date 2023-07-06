// import modules
import {useState} from 'react';
// import components
import Header from './components/header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
const name = 'Shane';                                                // you can set a variable and display it by calling the variable in curly brackets eg. <h2>Hello {name}</h2>/ you can add random data without a variable eg. <h2>Hello {1 + 1}</h2>
const x = false;                                                     // call variable into an if statement eg. <h2>Hi {x ? 'Yes' : 'No'}</h2>

const [tasks, setTasks] = useState([
  // {
  //   id: 1,
  //   text: 'Doctors Appointment',
  //   day: 'Feb 5th at 2:20pm',
  //   reminder: true
  // },
  // {
  //   id: 2,
  //   text: 'Meeting',
  //   day: 'Feb 5th at 1:30pm',
  //   reminder: true
  // },
  // {
  //   id: 3,
  //   text: 'Shopping',
  //   day: 'Feb 5th at 2:30pm',
  //   reminder: false
  // }
]);

// hide form
const [showAddTask, setShowAddTask] = useState(false);


// add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask])
}

// delete task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id != id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">

      {/* FUNCTION BASED COMPONENTS */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

{/* add task form */}
{showAddTask && 
      <AddTask onAdd={addTask} />
}


{/* if task is more than 0 show... :(else) show ... */}
      {tasks.length > 0  ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <div className='no-task-div'><h3 className='no-tasks'>You Have No Tasks :)</h3><img src="https://i.postimg.cc/8kmGLL4d/43d68193783231-62642905a82e2.gif" alt=""></img></div>
      }

    </div>
  );
}


// OR


// CLASS BASED COMPONENTS(NOT GOING TO USE THIS MUCH...AT ALL)
// import React from 'react';                                           // import only when using a class based component 

// class App extends React.Component {
//   render(){
//     return <h1>Hello From a Class</h1>
//   }
// }


export default App;

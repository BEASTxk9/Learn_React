// import modules
import {useState, useEffect} from 'react';

// import router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import Footer from './components/Footer';






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


useEffect(() => {

const getTasks = async () => {
  const tasksFromServer = await fecthTasks();
  setTasks(tasksFromServer);
}
  getTasks()

}, [])  // [] sets default empty array


// fetch tasks from db.json
const fecthTasks = async (id) => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json()

return data;
};

// fetch task from db.json
const fecthTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json()

return data;
};



// hide form
const [showAddTask, setShowAddTask] = useState(false);

// add task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', { 
    method : 'POST',
    headers : {
      'Content-type' : 'application/json',
    },
    body: JSON.stringify(task)                              // sets task to json so it can be read by the db.json file
   })

   const data = await res.json()
   setTasks([...tasks, data])                              // add task into the existing array


  // const id = Math.floor(Math.random() * 10000) + 1;
  // const newTask = {id, ...task};
  // setTasks([...tasks, newTask])
}

// delete task
const deleteTask = async (id) => {
await fetch(`http://localhost:5000/tasks/${id}`, { method : 'DELETE' })

 setTasks(tasks.filter((task) => task.id != id))
}

// toggle reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fecthTask(id);
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};

  const res = await fetch(`http://localhost:5000/tasks/${id}`, { 
    method: 'PUT',
    headers : {
      'Content-type' : 'application/json',
    },
    body: JSON.stringify(updTask)  
   } )

   const data = await res.json();

  setTasks(tasks.map((task) =>
   task.id === id ? {...task, reminder:
   data.reminder} : task));
}


  return (
    // to user router everything has to be wraped inside a router tag
    <Router>

<div className="container">

{/* FUNCTION BASED COMPONENTS */}
<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

  <Routes>

  <Route path="/" exact element={(
  <>
    {/* add task form */}
    {showAddTask && <AddTask onAdd={addTask} />}
    
    {/* if task is more than 0 show... :(else) show ... */}
    {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    ) : (
      <div className='no-task-div'>
        <h3 className='no-tasks'>You Have No Tasks :)</h3>
      </div>
    )}
  </>
)}/>

    <Route path="/about" element={<About />} />

  </Routes>

<Footer />
</div>

    </Router>
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

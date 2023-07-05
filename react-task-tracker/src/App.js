// import components
import Header from './components/header';


function App() {
const name = 'Shane';                                                // you can set a variable and display it by calling the variable in curly brackets eg. <h2>Hello {name}</h2>/ you can add random data without a variable eg. <h2>Hello {1 + 1}</h2>
const x = false;                                                     // call variable into an if statement eg. <h2>Hi {x ? 'Yes' : 'No'}</h2>

  return (
    <div className="container">

      {/* FUNCTION BASED COMPONENTS */}
      <Header />

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

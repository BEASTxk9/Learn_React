// if you have the " ES7 React/Redux/GraphQL/React-Native snippets " extension in vsc you can type " rafce " to get a template similar to (vue)Vueinti/!(html)
// import React from 'react'

// prop types not nessasry but just for learning purposes
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

// import component
import Button from './Button';


const Header = ({title, onAdd, showAdd}) => {                                          // if you add props in App.js eg. <Header title="hello" /> you can call it inside the function brakets eg. (props) and then call it below in curly brackets eg. <p>{props.title}</p>
 
    const location = useLocation();

    return (                          
    // add inline styling eg. <p style={{color: 'red', backgroundColor: 'black'}}>{title}</p> the css attributes are slightly diffrent eg. background-color is backgroundColor in React
    // add outside styleing eg. <p style={headingStyle}>{title}</p>     
   <header className="header">
    <div className="form-heading">
        <h1>{title}</h1>
        {location.pathname === '/' && (
          <Button
            color="white"
            text={showAdd ? 'Close' : 'Add'}
            bg={showAdd ? 'red' : 'black'}
            onClick={onAdd}
          />
        )}
    </div>

    </header>
  )
}

// you can set a prop outside of the header variable and call it inside the header variable brackets eg. (props) and call the prop eg. <p>{props.title}</p>
// OR
// you can set a prop outside of the header variable and call the props object inside the header variable brackets eg. ({title}) and call the prop eg. <p>{title}</p>
Header.defaultProps = {
    title: 'Task Tracker',
    number: 1,
}

// call propType to check the data in the variable matches the condition, string,number,...ect
Header.propTypes = {
    title: propTypes.string.isRequired,                                          // this can be called in from App.js file <Header /> tag eg. <Header title="hello"/> and displayed in Header.js in the Header function brackets eg. (props) and then in the code <p>props.title</p> 
    number: propTypes.number.isRequired,                                         // this can be called in from App.js file <Header /> tag eg. <Header number={1}/> and displayed in Header.js in the Header function brackets eg. (props) and then in the code <p>props.number</p> 
}

// CSS IN JS(set outside styling)/you can just use index.css
const headingStyle = {
color : 'red',
backgroundColor : 'black', 
}



export default Header
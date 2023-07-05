// if you have the " ES7 React/Redux/GraphQL/React-Native snippets " extension in vsc you can type " rafce " to get a template similar to (vue)Vueinti/!(html)
// import React from 'react'

const header = ({title}) => {                                          // if you add props in App.js eg. <Header title="hello" /> you can call it inside the function brakets eg. (props) and then call it below in curly brackets eg. <p>{props.title}</p>
  return (
    <header>
        {/* <h1>Task Tracker</h1> */}
        <p>{title}</p>
    </header>
  )
}

// you can set a prop outside of the header variable and call it inside the header variable brackets eg. (props) and call the prop eg. <p>{props.title}</p>
// OR
// you can set a prop outside of the header variable and call the props object inside the header variable brackets eg. ({title}) and call the prop eg. <p>{title}</p>
header.defaultProps = {
    title: 'Task Tracker',
}

export default header
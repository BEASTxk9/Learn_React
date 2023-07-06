### `LEARN REACT (COURSE LINK " https://youtu.be/w7ejDZ8SWv8?list=RDCMUC29ju8bIPH5as8OGnQzwJyA ")` ###

## `React is a libary for building user interfaces` ##

- React runs on the client as a SPA(Single Page App), but can be used to build full stack apps by communicating with a server/API

- React is often referred to as a front-end "framework" because it is capable and directly comparable to a framework such as Vue or Angular. 




## `Why would you use React` ##

- Structure the "view" layer of your application

- Resuable componenets with their own state

- JSX-Dynamic markup

- Interactive UIs and Virtual DOM(document object module){basically it does things without refreshing eg. delete item without refreshing a page}

- Performance & Testing

- Very popular in the industry

______________________________________________________________________________________________ 
## `Lets get started` ##

1. run code below in CMD/Terminal to install react app(similar to vue) {

- `npx create-react-app my-app`             
- `cd my-app`
- `npm start`

}

*  // Install ` Node js `
*  // npm(node.package.manager)
*  // install ` React Developer Tools ` extension to see more info in console


2. Open `src/App.js` which is where the app fetches all its content that is being displayed

*   // to create a class in react you will have to name it ` className="" `
*   // to create a label with a for attribute in react you will have to name it ` htmlFor="" `
*   // install ` ES7 React/Redux/GraphQL/React-Native snippets ` in vsc


3. To get started remove the default code below from `APP.js` and begin {

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

}

*   // You can remove the files below in the `scr` folder just to clear up default files that you will not use{
    - `Appp.css`               // remember to remove import "App.css" from App.js file
    - `App.test.js`
    - `logo.svg`              // remember to remove import "logo.svg" from App.js file
    - `SetupTests.js`
}
*   // all code should be `wraped inside a div` or an `empty open and closing tag` eg. {

<!--EMPTY OPEN TAG-->
    <>

<!-- content -->
<h1>Hello World</h1>

<!-- EMPTY CLOSING TAG -->
    </>

}

4. Create a components folder in the scr folder and create you components in js

*   // if you have the " ES7 React/Redux/GraphQL/React-Native snippets " extension in vsc you can type `rafce` to get a template similar to (vue)Vueinti/!(html)
*   // when doing this remember to remove import "React" since it is something that you already have installed
*   // after creating component import it into `App.js` eg. `import Header from './components/header.js'`


5. Once you complete the interface of your website you can proceed to build for production/database 
* run `npm run build`           // doing this will create a build folder
* run `npm i -g serve`
* run `serve -s build -p 8000`  // this will stay live even if all folders are deleted...PRODUCTION BUILD.exe lol
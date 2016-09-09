import React from 'react';
import ReactDOM from 'react-dom';
import './main.css'
//hello world
// ReactDOM.render(
//   <h1>hello world</h1>,
//   document.getElementById('app')
// )


//es6写组件 && 嵌套组件

// class MyComponent extends React.Component{
//   render(){
//
//     return (
//       <div>
//         <p>I love eat!</p>
//       </div>
//     )
//   }
// }

// class Hello extends React.Component{
//   render(){
//     return (
//       <div className='as'>
//         <MyComponent />
//         <p className='demo'>Hello world123</p>
//       </div>
//     )
//   }
// }
import App from './App';
ReactDOM.render(
  <App />,
  document.getElementById('app')
)

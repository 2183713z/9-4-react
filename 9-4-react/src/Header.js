import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
  styles(){
    return{
      color:'green ',
      fontSize:'35px'
    }
  }
  render(){
    let styles=this.styles();
    return (
      <div className='as'>
        <p style={styles}>Header</p>
      </div>
    )
  }
}
export default Header;

import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
  render(){
    let styles={
      width:'400px',
      height:'200px',
      backgroundColor:'pink',
      color:'#808080'
    }
    return (
      <div className='as'>
        <p style={styles}>Footer</p>
      </div>
    )
  }
}
export default Footer;

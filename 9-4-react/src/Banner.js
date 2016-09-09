import React from 'react';
import ReactDOM from 'react-dom';
//行内加载图片
import Bg from './images/1.jpg';
class Banner extends React.Component{
  render(){
    let styles={
      root:{
        width:'400px',
        height:'300px',
        // backgroundColor:'orange',
        //es6
        backgroundImage:`url(${Bg})`
        //es5
        //  backgroundImage: 'url(' + Bg + ')'
      },
      p1:{
        fontSize:'20px',
        color:'#fff'
      },
      p2:{
        fontSize:'40px',
        color:'#fff'
      },
    }
    return (
      <div style={styles.root}>
        <p  style={styles.p1}>Banner1</p>
        <p  style={styles.p2}>Banner1</p>
        {/*<img src={Bg} title='aaa' alit='bbb' />*/}
      </div>
    )
  }
}
export default Banner;

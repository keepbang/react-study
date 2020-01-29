import React, {Component, Fragment} from 'react';
import './App.css';

class Ch02 extends Component{

  render(){

    const text = "리액트 테스트 안녕!";
    const bool = 1;
    const style = {
      backgroundColor : 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      MozTransition: 'all',
      msTransition: 'all'
    }
      
    return (
      <Fragment> {/*React v16 이상부터 사용 */}
        <h1 className="blueTxt">test</h1>
        <h2 className="blueTxt">{text}</h2>
        {
          bool && '참입니다'
        }
        <div style={style}></div>
      </Fragment>
    );
  }
  
}

export default Ch02;

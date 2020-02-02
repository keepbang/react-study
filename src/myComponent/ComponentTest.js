import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentTest extends Component {

    state = {
        number : 0
    }

    static defaultProps = {
        name : 1
    }

    static propTypes = {
        name : PropTypes.number
    }

    plusBtnEvent = () =>{
        let num = this.state.number + 1
        this.setState({
            number : num
        })
        
    }

    render() {
        console.log("component render!!");
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={this.plusBtnEvent}>더하기</button>
            </div>
        );
    }
}


export default ComponentTest;
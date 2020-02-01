import React, { Component } from 'react';

class ComponentTest extends Component {

    static defaultProps = {
        name : '기본값'
    }

    render() {
        return (
            <div>
                안녕하세요, 제 이름은 {this.props.name} 입니다.
            </div>
        );
    }
}


export default ComponentTest;
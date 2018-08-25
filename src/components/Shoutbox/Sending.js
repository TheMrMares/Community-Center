import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import {firestore} from './../../firebase/index';

const Send = styled.input.attrs({
    type: 'submit',
    value: 'Send'
})`
    flex: 0 0 auto;
`;
const Field = styled.input.attrs({
    type: 'text',
    placeholder: 'Type message...'
})`
    flex: 1 1 auto;
`;
const Wrapper = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${Field}, ${Send} {
        margin: 0px 20px;
    }
`;

class Sending extends Component {
    constructor(){
        super();
        this.state = {
            message: ''
        }
    }
    handleChange(evt){
        this.setState({
            message: evt.target.value
        });
    }
    handleSubmit(){

    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <Field value={this.state.message} onChange={this.handleChange.bind(this)}/>
                <input type='submit' value='Send' onClick={this.handleSubmit.bind(this)}/>
            </Wrapper>
        );
    }
}

export default Sending;
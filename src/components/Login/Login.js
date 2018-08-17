import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

const Submit = styled.input.attrs({
    type: 'submit',
    value: 'Sign In'
})`
    display: block;
    margin: 10px auto;
    outline: none;
`;

const Title = styled.h1`
    font-size: 1.2em;
    flex: 0 0 100%;
    text-align: center;
`;
const Label = styled.h2`
    font-size: 0.9em;
    flex: 0 0 50%;
    border-left: 3px solid ${colors.special};
    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const Field = styled.input`
    flex: 0 0 50%;
`;
const Holder = styled.div`
    justify-content: center;
    padding: 15px;
    background: ${colors.smoothfair};
    border-radius: 2px;
`;
const Wrapper = styled.div`
    border: 1px solid ${colors.lessfair};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

class Login extends Component {
    submitLogin(evt){
        evt.preventDefault();
        evt.stopPropagation();
        
        console.log('xd');
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <Holder>
                    <Title>Login</Title>
                    <Label>E-mail</Label>
                    <Field type="email"/>
                    <Label>Password</Label>
                    <Field type="password"/>
                    <Submit onClick={this.submitLogin.bind(this)}/>
                </Holder>
            </Wrapper>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';
import {auth} from './../../firebase/index';

const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
        &:hover{
            color: ${colors.special};
        }
`;
const Submit = styled.input.attrs({
    type: 'submit',
    value: 'Sign In'
})`
    display: block;
    margin: 10px auto;
    outline: none;
    &:hover {
        background: ${colors.darkspecial};
    }
`;
const Hint = styled.div`
    padding: 5px;
    font-size: 0.9em;
    text-align: center;
    margin-top: 10px;
`;
const Title = styled.h1`
    font-size: 1.2em;
    text-align: center;
`;
const Label = styled.h2`
    font-size: 0.9em;
    border-left: 3px solid ${colors.special};
    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const Field = styled.input`
    margin: auto;
    left: 0; right: 0;
`;
const Holder = styled.div`
    display: flex;
    flex-direction: column;
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
    constructor(){
        super();
        this.state = {
            emailVal: '',
            passwordVal: '',
            redirect: null
        }
    }
    submitLogin(evt){
        evt.preventDefault();
        evt.stopPropagation();
        
        auth.signInWithEmailAndPassword(this.state.emailVal, this.state.passwordVal).then(() => {
            this.setState({
                redirect: '/register'
            })
        }).catch(error => {
            console.log(`#ERROR Code: ${error.code} Message: ${error.message}`);
        });
    }
    handleChange(evt){
        switch(evt.target.id){
            case 'loginEmail':
                this.setState({
                    emailVal: evt.target.value
                })
            break;
            case 'loginPassword':
                this.setState({
                    passwordVal: evt.target.value
                })
            break;
        }
    }
    letsRedirect(){
        if(this.state.redirect !== null){
            return <Redirect to={this.state.redirect}/>
        }
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <Holder>
                    {this.letsRedirect()}
                    <Title>Login</Title>
                    <Label>E-mail</Label>
                    <Field 
                        id='loginEmail'
                        type='email' 
                        placeholder='E-mail'
                        value={this.state.emailVal}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Label>Password</Label>
                    <Field 
                        id='loginPassword'
                        type='password' 
                        placeholder='Password'
                        value={this.state.passwordVal}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Hint>
                    Haven't got account?<StyledLink to='/register'> <br/>Create one.</StyledLink>
                    </Hint>
                    <Submit onClick={this.submitLogin.bind(this)}/>
                </Holder>
            </Wrapper>
        );
    }
}

export default Login;
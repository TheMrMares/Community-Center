import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';
import {auth, firestore} from './../../firebase/index';

const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
        &:hover{
            color: ${colors.special};
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
const Submit = styled.input.attrs({
    type: 'submit',
    value: 'Create account'
})`
    display: block;
    margin: 10px auto;
    outline: none;
    &:hover {
        background: ${colors.darkspecial};
    }
`;
const Area = styled.div`
    padding: 10px 30px;
`;
const Top = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Bottom = styled.div`

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

class Register extends Component {
    constructor(){
        super();
        this.state = {
            displaynameVal: '',
            firstnameVal: '',
            surnameVal: '',
            emailVal: '',
            emailRepeatVal: '',
            passwordVal: '',
            passwordRepeatVal: '',
            redirect: null
        }
    }
    handleChange(evt){
        switch(evt.target.id){
            case 'registerDisplayname':
                this.setState({
                    displaynameVal: evt.target.value
                });
            break;
            case 'registerFirstname':
                this.setState({
                    firstnameVal: evt.target.value
                });
            break;
            case 'registerSurname':
                this.setState({
                    surnameVal: evt.target.value
                });
            break;
            case 'registerEmail':
                this.setState({
                    emailVal: evt.target.value
                });
            break;
            case 'registerEmailRepeat':
                this.setState({
                    emailRepeatVal: evt.target.value
                });
            break;
            case 'registerPassword':
                this.setState({
                    passwordVal: evt.target.value
                });
            break;
            case 'registerPasswordRepeat':
                this.setState({
                   passwordRepeatVal: evt.target.value
                });
            break;
        }
    }
    submitRegister(evt){
        evt.preventDefault();
        evt.stopPropagation();

        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        const sameEmails = (this.state.emailVal === this.state.emailRepeatVal);
        const samePasswords = (this.state.passwordVal === this.state.passwordRepeatVal);
        const filledEmail = (this.state.emailVal.length !== 0);
        const longPassword = (this.state.passwordVal.length >= 6);
        const validEmail = (reg.test(this.state.emailVal));
        const everyCond = (sameEmails && samePasswords && filledEmail && longPassword && validEmail);

        if(everyCond) {
            auth.createUserAndRetrieveDataWithEmailAndPassword(this.state.emailVal, this.state.passwordVal).then((data) => {
                
                firestore.collection('users').doc(data.user.uid).set({
                    displayname: this.state.displaynameVal,
                    firstname: this.state.firstnameVal,
                    surname: this.state.surnameVal
                }).then(() => {
                    this.setState({
                        redirect: '/login'
                    })
                }).catch(error => {
                    console.log(`#ERROR Code: ${error.code} Message: ${error.message}`);
                });

            }).catch(error => {
                console.log(`#ERROR Code: ${error.code} Message: ${error.message}`);
            });
        } else {
            
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
                    <Title>Register</Title>
                    <Top>
                        <Area>
                            <Label>Display name</Label>
                            <Field 
                                id='registerDisplayname'
                                type='text' 
                                placeholder='Display name'
                                value={this.state.displaynameVal}
                                onChange={this.handleChange.bind(this)}
                            />
                            <Label>Your firstname</Label>
                            <Field 
                                id='registerFirstname'
                                type='text' 
                                placeholder='Firstname'
                                value={this.state.firstnameVal}
                                onChange={this.handleChange.bind(this)}
                            />
                            <Label>Your surname</Label>
                            <Field 
                                id='registerSurname'
                                type='text' 
                                placeholder='Surname'
                                value={this.state.surnameVal}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Area>
                        <Area>
                            <Label>E-mail</Label>
                            <Field 
                                id='registerEmail'
                                type='email' 
                                placeholder='E-mail'
                                onChange={this.handleChange.bind(this)}
                            />
                            <Label>Repeat e-mail</Label>
                            <Field 
                                id='registerEmailRepeat'
                                type='email' 
                                placeholder='Repeat e-mail'
                                onChange={this.handleChange.bind(this)}
                            />
                        </Area>
                        <Area>
                            <Label>Password</Label>
                            <Field 
                                id='registerPassword'
                                type='password' 
                                placeholder='Password'
                                onChange={this.handleChange.bind(this)}
                            />
                            <Label>Repeat password</Label>
                            <Field 
                                id='registerPasswordRepeat'
                                type='password' 
                                placeholder='Repeat password'
                                onChange={this.handleChange.bind(this)}
                            />
                        </Area>
                    </Top>
                    <Bottom>
                        <Hint>
                        Have you got account?<StyledLink to='/login'> Log in.</StyledLink>
                        </Hint>
                        <Submit onClick={this.submitRegister.bind(this)}/>
                    </Bottom>
                </Holder>
            </Wrapper>
        );
    }
}

export default Register;
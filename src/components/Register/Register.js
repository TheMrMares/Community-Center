import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';

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
    render(){
        return(
            <Wrapper className={this.props.className}>
                <Holder>
                    <Title>Register</Title>
                    <Top>
                        <Area>
                            <Label>Display name</Label>
                            <Field type='text' placeholder='Display name'/>
                            <Label>Your firstname</Label>
                            <Field type='text' placeholder='Firstname'/>
                            <Label>Your surname</Label>
                            <Field type='text' placeholder='Surname'/>
                        </Area>
                        <Area>
                            <Label>E-mail</Label>
                            <Field type='email' placeholder='E-mail'/>
                            <Label>Repeat e-mail</Label>
                            <Field type='email' placeholder='Repeat e-mail'/>
                        </Area>
                        <Area>
                            <Label>Password</Label>
                            <Field type='password' placeholder='Password'/>
                            <Label>Repeat password</Label>
                            <Field type='password' placeholder='Repeat password'/>
                        </Area>
                    </Top>
                    <Bottom>
                        <Submit/>
                    </Bottom>
                </Holder>
            </Wrapper>
        );
    }
}

export default Register;
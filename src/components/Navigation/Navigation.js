import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

import NavPanel from './NavPanel';

const Hint = styled.div`
`;
const Left =  styled.div`
    justify-content: flex-start;
`;
const Right = styled.div`
    justify-content: flex-end;
`;
const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    ${Left}, ${Right} {
        flex: 0 0 50%;
        display: flex;
        align-items: center;
    }
    a {
        cursor: pointer;
        &:hover{
            color: ${colors.special};
        }
    }
`;

class Navigation extends Component {
    handleRegister(){
        console.log('show register')
    }
    handleLogin(){
        console.log('show login')
    }
    render(){
        return(
            <Wrapper>
                <Left>
                    <NavPanel/>
                </Left>
                <Right>
                    <Hint>
                        <a onClick={this.handleLogin.bind(this)}>Login</a> Haven't got account? <a onClick={this.handleRegister.bind(this)}>Create</a>
                    </Hint>
                </Right>
            </Wrapper>
        );
    }
}

export default Navigation;
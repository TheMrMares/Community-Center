import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';

import NavPanel from './NavPanel';

const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
        &:hover{
            color: ${colors.special};
        }
`;
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
`;

class Navigation extends Component {
    render(){
        return(
            <Wrapper>
                <Left>
                    <NavPanel/>
                </Left>
                <Right>
                    <Hint>
                        <StyledLink to='/login'>Login</StyledLink> Haven't got account? <StyledLink to='/register'>Create</StyledLink>
                    </Hint>
                </Right>
            </Wrapper>
        );
    }
}

export default Navigation;
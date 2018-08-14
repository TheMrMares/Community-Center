import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

import NavPanel from './NavPanel';

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
                    2
                </Right>
            </Wrapper>
        );
    }
}

export default Navigation;
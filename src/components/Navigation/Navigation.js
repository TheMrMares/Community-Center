import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

import NavPanel from './NavPanel';

const Left =  styled.div``;
const Right = styled.div``;
const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    background: ${colors.lessfair};
    ${Left}, ${Right} {
        flex: 0 0 50%;
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
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from './../../constants/colors';

import Navigation from './../Navigation/Navigation';

const Wrapper = styled.header`
    background: ${colors.fair};
    text-align: center;
`;

class Header extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                <h1>Logo header</h1>
                <Navigation/>
            </Wrapper>
        );
    }
}

export default Header;
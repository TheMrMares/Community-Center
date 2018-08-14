import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation from './../Navigation/Navigation';

const Wrapper = styled.header`
    border-radius: 15px;
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
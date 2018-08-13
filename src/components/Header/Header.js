import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

const Wrapper = styled.header`
    border: 1px solid green;
`;

class Header extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                Header
            </Wrapper>
        );
    }
}

export default Header;
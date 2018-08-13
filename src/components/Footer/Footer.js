import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

const Wrapper = styled.footer`
    border: 1px solid blue;
`;

class Footer extends Component {
    render(){
        return(
            <Wrapper>
                Footer
            </Wrapper>
        );
    }
}

export default Footer;
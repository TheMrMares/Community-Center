import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';
import paths from './../../constants/paths';

import ServiceMap from './ServiceMap';
const StyledServiceMap = styled(ServiceMap)``;
const Wrapper = styled.footer`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    border-left: 3px solid ${colors.verylessfair};
    border-right: 2px solid ${colors.lessfair};
    background: ${colors.fair};
    h2 {
        font-weight: normal;
        font-size: 1.4em;
    }
    ${StyledServiceMap} {
        flex: 1 1 auto;
        margin: 5px 0px;
    }
`;

class Footer extends Component {
    
    render(){
        return(
            <Wrapper className={this.props.className}>
                <StyledServiceMap/>
            </Wrapper>
        );
    }
}

export default Footer;
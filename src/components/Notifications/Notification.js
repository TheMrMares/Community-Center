import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

const Wrapper = styled.div`

`;

class Notification extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                Notification
            </Wrapper>
        );
    }
}

export default Notification;
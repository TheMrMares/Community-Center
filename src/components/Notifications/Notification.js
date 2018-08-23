import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';


const Text = styled.p``;
const Title = styled.h1``;
const Wrapper = styled.div`

`;

class Notification extends Component {
    render(){
        console.log('render');
        return(
            <Wrapper className={this.props.className}>
                <Title>{this.props.title}</Title>
                <Text>{this.props.text}</Text>
            </Wrapper>
        );
    }
}

export default Notification;
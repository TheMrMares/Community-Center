import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

const Title = styled.h1`
    color: ${colors.fair};
    margin: 3px;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: normal;
`;
const Text = styled.p`
    color: ${colors.fair};  
    margin: 3px;
`;
const Marker = styled.h2`
    color: ${colors.lessfair};
    margin: 0px;
    font-size: 0.7em;
    text-align: right;
    text-transform: uppercase;
    font-weight: lighter;
`;
const Wrapper = styled.div`
    color: ${colors.smooth};
    background: ${colors.special};
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 10px;
    border-radius: 3px;
    border-left: 2px solid ${colors.fairspecial};
    border-right: 3px solid ${colors.darkspecial};
`;

class Notification extends Component {
    render(){
        console.log('render');
        return(
            <Wrapper className={this.props.className}>
                <Title>{this.props.title}</Title>
                <Text>{this.props.text}</Text>
                <Marker>Notification ID:</Marker>
                <Marker>{this.props.noteID}</Marker>
            </Wrapper>
        );
    }
}

export default Notification;
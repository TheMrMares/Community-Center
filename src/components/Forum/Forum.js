import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import Shoutbox from './../Shoutbox/Shoutbox';

const Title = styled.h1`
    margin: 5px;
    text-align: left;
    align-self: flex-start;
`;
const StyledShoutbox = styled(Shoutbox)``;
const ContentWrapper = styled.div`
    width: 60%;
`;
const Wrapper = styled.div`
    border: 1px solid ${colors.lessfair};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

class Forum extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                <ContentWrapper>
                    <Title>Shoutbox</Title>
                    <StyledShoutbox/>
                    <Title>Threads</Title>
                </ContentWrapper>
            </Wrapper>
        );
    }
}

export default Forum;

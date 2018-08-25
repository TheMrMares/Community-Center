import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import Shoutbox from './../Shoutbox/Shoutbox';
const StyledShoutbox = styled(Shoutbox)``;

const Wrapper = styled.div`
    border: 1px solid ${colors.lessfair};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    ${StyledShoutbox} {
        width: 60%;
    }
`;

class Forum extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                <StyledShoutbox/>
                Forum
            </Wrapper>
        );
    }
}

export default Forum;

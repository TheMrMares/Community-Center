import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import Reading from './Reading';
import Sending from './Sending';

const StyledReading = styled(Reading)``;
const StyledSending = styled(Sending)``;
const Wrapper = styled.div`
    background: ${colors.smoothfair};
    border-radius: 3px;
    padding: 5px;
`;

class Shoutbox extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                <StyledReading/>
                <StyledSending/>
            </Wrapper>
        );
    }
}

export default Shoutbox;
import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

const Wrapper = styled.div`

`;

class Reading extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                Reading
            </Wrapper>
        );
    }
}

export default Reading;
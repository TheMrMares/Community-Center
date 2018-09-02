import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

const Wrapper = styled.div`

`;

class Profile extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                Profile
            </Wrapper>
        );
    }
}

export default Profile;
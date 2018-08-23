import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';

const Text = styled.p`

`;
const Title = styled.h1`
    font-size: 1.3em;
    margin: 3px;
`;
const Holder = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: ${colors.smoothfair};
    border-radius: 2px;
    max-width: 50%;
`;
const Wrapper = styled.div`
    border: 1px solid ${colors.lessfair};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

class Home extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                <Holder>
                    <Title>Our website</Title>
                    <Text>
                        Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website 
                    </Text>
                    <Title>Our website</Title>
                    <Text>
                        Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website 
                    </Text>
                    <Title>Our website</Title>
                    <Text>
                        Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website Our website 
                    </Text>
                </Holder>
            </Wrapper>
        );
    }
}

export default Home;
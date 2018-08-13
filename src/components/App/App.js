import React, { Component } from 'react';
import styled, { injectGlobal} from 'styled-components';
import colors from './../../constants/colors';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const StyledHeader = styled(Header)``;
const StyledFooter = styled(Footer)``;

const Wrapper = styled.div`
  border: 1px solid red;
`;
injectGlobal`
  html, body {
    margin: 0px; padding: 0px;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>
          <StyledHeader/>
          Here will be routing
          <StyledFooter/>
      </Wrapper>
    );
  }
}

export default App;

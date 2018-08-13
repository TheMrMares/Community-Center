import React, { Component } from 'react';
import styled, { injectGlobal} from 'styled-components';
import colors from './../../constants/colors';
import HyeonURL from './../../fonts/DoHyeon-Regular.ttf';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const StyledHeader = styled(Header)``;
const StyledFooter = styled(Footer)``;

const Wrapper = styled.div`
  border: 1px solid red;
`;
injectGlobal`
  @font-face {
    font-family: hyeon;
    src: url(${HyeonURL});
  }
  html, body {
    margin: 0px; padding: 0px;
    color: ${colors.fair};
    font-family: hyeon;
  }
  img {
    position: relative;
    max-width: 100%;
  }
  * {
    box-sizing: border-box;
    transition: 0.15s ease;
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

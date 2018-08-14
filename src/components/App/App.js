import React, { Component } from 'react';
import styled, { injectGlobal} from 'styled-components';
import colors from './../../constants/colors';
import HyeonURL from './../../fonts/DoHyeon-Regular.ttf';
import RobotoURL from './../../fonts/Roboto-Regular.ttf';
import BannerURL from './../../images/banner-bckg-blur.jpg'
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const StyledHeader = styled(Header)``;
const StyledFooter = styled(Footer)``;
const ComponentsArea = styled.section`
  margin-top: 15px;
  border-radius: 15px;
  background: ${colors.fair};
  padding: 10px;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  background: url(${BannerURL});
  background-size: cover;
  background-attachment: fixed;
  padding: 15px;
`;
injectGlobal`
  @font-face {
    font-family: hyeon;
    src: url(${HyeonURL});
  }
  @font-face {
    font-family: roboto;
    src: url(${RobotoURL});
  }
  html, body {
    margin: 0px; padding: 0px;
    font-family: roboto;
    width: 100%;
    height: 100%;
  }
  img {
    position: relative;
    max-width: 100%;
  }
  * {
    box-sizing: border-box;
    transition: 0.15s ease;
    color: ${colors.dark};
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 5px;
    padding: 0px;
  }
  a,h1,h2,h3,h4,h5,h6 {
    font-family: hyeon !important;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>
          <StyledHeader/>
            <ComponentsArea>
              ass
            </ComponentsArea>
          <StyledFooter/>
      </Wrapper>
    );
  }
}

export default App;

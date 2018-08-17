import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import colors from './../../constants/colors';
import BannerURL from './../../images/banner-bckg-blur.jpg'
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Login from './../Login/Login';

const StyledHeader = styled(Header)``;
const StyledFooter = styled(Footer)``;
const ComponentsArea = styled.section`
  margin-top: 10px;
  background: ${colors.fair};
  padding: 10px;
  border-left: 2px solid ${colors.lessfair};
  border-right: 3px solid ${colors.verylessfair};
`;
const Wrapper = styled.div`
  min-height: 100vh;
  background: url(${BannerURL});
  background-size: cover;
  background-attachment: fixed;
  padding: 15px;
`;

const ProtectedRoute = ({component: Component, authenticated, ...rest}) => {
  return(
    <Route {...rest} render={(props) => {
      if(authenticated !== null) {
        return <Component {...props} {...rest} />
      } else {
        return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
      }
    }}/>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper className={this.props.className}>
          <StyledHeader/>
            <ComponentsArea>
              <Route exact path='/login' component={Login}/>
            </ComponentsArea>
          <StyledFooter/>
        </Wrapper>
      </Router>
    );
  }
}

export default App;

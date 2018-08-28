import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from './../../constants/colors';
import {auth} from './../../firebase/index';
import NavPanel from './NavPanel';

const Logout = styled.button`
    &:hover{
        background: ${colors.darkspecial};
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
        &:hover{
            color: ${colors.special};
        }
`;
const Hint = styled.div`
`;
const Left =  styled.div`
    justify-content: flex-start;
`;
const Right = styled.div`
    justify-content: flex-end;
`;
const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    ${Left}, ${Right} {
        flex: 0 0 50%;
        display: flex;
        align-items: center;
    }
`;

class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            redirect: null
        }
    }
    letsRedirect(){
        if(this.state.redirect !== null){
            return <Redirect to={this.state.redirect}/>
        }
    }
    logout(){
        auth.signOut();
        this.setState({
            redirect: '/login'
        })
    }
    renderHint(){
        if(this.props.auths.authed){
            return(
                <Hint>
                    <Logout onClick={this.logout.bind(this)}>Logout</Logout>
                </Hint>
            );
        } else if(!this.props.auths.authed){
            return(
                <Hint>
                    <StyledLink to='/login'>Login</StyledLink> Haven't got account? <StyledLink to='/register'>Create</StyledLink>
                </Hint>
            );
        }
    }
    render(){
        return(
            <Wrapper>
                {this.letsRedirect()}
                <Left>
                    <NavPanel/>
                </Left>
                <Right>
                    {this.renderHint()}
                </Right>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return { 
        auths: state.auths
    };
};
export default connect(mapStateToProps, null)(Navigation);
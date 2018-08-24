import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';
import paths from './../../constants/paths';
import uuidv4 from 'uuidv4';
import {auth} from './../../firebase/index';

const StyledLink = styled(Link)`
    text-decoration: none;
    text-decoration: uppercase;
    font-size: 1em;
    padding: 6px 30px;
    color: ${colors.fair} !important;
    background: ${colors.special};
    border-left: 2px solid ${colors.fairspecial};
    border-right: 3px solid ${colors.darkspecial};
    &:hover{
        background: ${colors.darkspecial}
    }
  }
`;
const Item = styled.li`
    display: flex;
`;
const Wrapper = styled.ul`
    margin: 0px;
    padding: 0px;
    display: flex;
`;

class NavPanel extends Component {
    renderItem(name, path){
        return(
            <Item key={uuidv4()}>
                <StyledLink to={path}>{name}</StyledLink>
            </Item>
        );
    }
    render(){
        return(
            <Wrapper>
                {paths.map((item, index) => {
                    switch(item.mode){
                        case 0:
                            return this.renderItem(item.name, item.path);
                        case 1:
                            return !auth.currentUser && this.renderItem(item.name, item.path);
                        case 2:
                            return auth.currentUser && this.renderItem(item.name, item.path);
                        default:
                            return;
                    }
                })}
            </Wrapper>
        );
    }
}

export default NavPanel;
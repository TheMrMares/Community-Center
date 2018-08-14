import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';
import paths from './../../constants/paths';

const StyledLink = styled(Link)`
    text-decoration: none;
    text-decoration: uppercase;
    font-size: 1em;
    padding: 6px 30px;
    color: ${colors.fair};
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
            <Item>
                <StyledLink to={path}>{name}</StyledLink>
            </Item>
        );
    }
    render(){
        return(
            <Wrapper>
                {paths.map((item, index) => {
                    return this.renderItem(item.name, item.path)
                })}
            </Wrapper>
        );
    }
}

export default NavPanel;
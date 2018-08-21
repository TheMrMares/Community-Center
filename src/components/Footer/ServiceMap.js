import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';
import paths from './../../constants/paths';
import uuidv4 from 'uuidv4';

const Title = styled.h2`
    font-size: 0.8em;
`;
const StyledLink = styled(Link)`
    padding: 5px 20px;
    color: ${colors.dark};
    text-decoration: none;
    font-weight: lighter;
    border-left: 2px solid ${colors.special};
    &:hover{
        background: ${colors.lessfair};
    }
`;
const Item = styled.li`
    display: flex;
    margin: 5px 0px;
    font-size: 0.9em;
`;
const Map = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type:none;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

class ServiceMap extends Component {
    renderItem(name, path){
        return(
            <Item key={uuidv4()}>
                <StyledLink to={path}>{name}</StyledLink>
            </Item>
        );
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <Title>Service map</Title>
                <Map>
                    {paths.map((item, index) => {
                        return this.renderItem(item.name, item.path)
                    })}
                </Map>
            </Wrapper>
        );
    }
}

export default ServiceMap;
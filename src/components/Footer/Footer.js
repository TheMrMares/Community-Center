import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';
import paths from './../../constants/paths';

const StyledLink = styled(Link)`
    padding: 5px 20px;
    color: ${colors.dark};
    font-weight: lighter;
    border-top: 2px solid ${colors.lessfair};
    border-bottom: 2px solid ${colors.lessfair};
    border-right: 2px solid ${colors.lessfair};
    border-left: 2px solid ${colors.special};
    &:hover {
        border-top: 2px solid ${colors.special};
        border-bottom: 2px solid ${colors.special};
        border-right: 2px solid ${colors.special};
        color: ${colors.special};
    }
`;
const Item = styled.li`
    display: flex;
    margin: 5px 0px;
`;
const Map = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type:none;
`;
const MapArea = styled.div`
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
const Wrapper = styled.footer`
    padding: 20px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    background: ${colors.lessfair};
    h1 {
        font-weight: normal;
        margin: 5px;
        padding: 0px;
        font-size: 1.4em;
    }
`;

class Footer extends Component {
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
                <MapArea>
                    <h1>Service map</h1>
                    <Map>
                        {paths.map((item, index) => {
                            return this.renderItem(item.name, item.path)
                        })}
                    </Map>
                </MapArea>
            </Wrapper>
        );
    }
}

export default Footer;
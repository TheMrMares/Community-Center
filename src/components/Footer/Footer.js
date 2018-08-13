import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './../../constants/colors';
const StyledLink = styled(Link)`
    padding: 5px 20px;
    color: ${colors.fair};
    font-weight: lighter;
    &:hover {
        background: ${colors.special};
    }
`;
const Item = styled.li`
    display: flex;
`;
const Map = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type:none;
    border-left: 2px solid ${colors.special};
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
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    background: ${colors.dark};
`;

class Footer extends Component {
    render(){
        return(
            <Wrapper>
                <MapArea>
                    <h1>Service map</h1>
                    <Map>
                        <Item>
                            <StyledLink to='/'>Hello</StyledLink>
                        </Item>
                    </Map>
                </MapArea>
            </Wrapper>
        );
    }
}

export default Footer;
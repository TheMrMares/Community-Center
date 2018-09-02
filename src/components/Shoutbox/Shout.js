import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import avatarThumbURL from './../../images/avatar-thumb1.1.png';
import propTypes from 'prop-types';

const Text = styled.p`
    font-family: Arial !important;
    word-wrap: break-word;
    max-width: 100%;
    margin: 0px 5px;
`;
const Avatar = styled.img`
    width: 20px;
    height: 20px;
    border: 1px solid ${colors.verylessfair};
    border-radius: 100%;
`;
const Displayname = styled.p`
    margin: 0px 5px;
    font-size: 0.8em;
    font-weight: bold;
`;
const Author = styled.div`
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
`;
const Message = styled.div`
    width: 85%;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 0.8em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
const Wrapper = styled.form`
    padding: 5px;
    display: flex;
    flex-direction: row;
    ${Author}, ${Message} {
        display: flex;
    }
`;

class Shout extends Component {
    replaceImage(evt){
        evt.target.src = avatarThumbURL;
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <Author>
                    <Avatar src={this.props.url} onError={this.replaceImage.bind(this)}/>
                    <Displayname>
                        {this.props.displayname}:
                    </Displayname>
                </Author>
                <Message>
                    <Text>
                    {this.props.text}
                    </Text>
                </Message>
            </Wrapper>
        );
    }
}

Shout.propTypes = {
    url: propTypes.string,
    text: propTypes.string.isRequired,
    displayname: propTypes.string.isRequired
}

export default Shout;
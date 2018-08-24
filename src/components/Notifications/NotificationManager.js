import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import { connect } from 'react-redux';
import uudiv4 from 'uuidv4';
import Notification from './Notification';

const Wrapper = styled.div`
    position: fixed;
    z-index: 100000;
    top: 0;
    right: 0;
`;

class NotificationManager extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                {this.props.notifications.map((item, index) => {
                    return <Notification 
                        title={item.title} 
                        text={item.text} 
                        noteID={item.noteID} 
                        key={uudiv4()}
                    />
                })}
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return { 
        notifications: state.notifications
    };
};
export default connect(mapStateToProps, null)(NotificationManager);
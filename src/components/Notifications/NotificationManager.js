import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import { connect } from 'react-redux';
import {AddNotification, DeleteNotification} from './../../actions/index';
import uudiv4 from 'uuidv4';
import Notification from './Notification';

const Wrapper = styled.div`
    position: fixed;
    z-index: 100000;
    top: 0;
    right: 0;
    border: 1px solid red;
`;

class NotificationManager extends Component {
    addNotification(){
        this.props.addNote({
            title: 'Note Title',
            text: 'Some Note textt heree',
            noteID: uudiv4(),
            livetime: 2000
        });
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <button onClick={this.addNotification.bind(this)}>Add</button>
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
const mapDispatchToProps = dispatch => {
  return {
      addNote: payload => dispatch(AddNotification(payload)),
      deleteNote: payload => dispatch(DeleteNotification(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationManager);
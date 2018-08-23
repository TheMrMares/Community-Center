import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import { connect } from 'react-redux';
import {AddNotification} from './../../actions/index';
import uudiv4 from 'uuidv4';

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
                {console.log(this.props.notifications)}
                NotificationManager
                <button onClick={this.addNotification.bind(this)}>Add</button>
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
      addNote: payload => dispatch(AddNotification(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationManager);
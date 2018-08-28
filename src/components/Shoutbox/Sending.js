import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import {firestore} from './../../firebase/index';
import firebase from 'firebase/app'
import {connect} from 'react-redux';
import uudiv4 from 'uuidv4';

const Send = styled.input.attrs({
    type: 'submit',
    value: 'Send'
})`
    flex: 0 0 auto;
`;
const Field = styled.input.attrs({
    type: 'text',
    placeholder: 'Type message...'
})`
    flex: 1 1 auto;
`;
const Wrapper = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${Field}, ${Send} {
        margin: 0px 20px;
    }
`;

class Sending extends Component {
    constructor(){
        super();
        this.state = {
            message: ''
        }
    }
    handleChange(evt){
        this.setState({
            message: evt.target.value
        });
    }
    handleSubmit(evt){
        evt.preventDefault();
        evt.stopPropagation();

        firestore.collection('shouts').add({
            authorUid: this.props.auths.user.uid,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            text: this.state.message
        }).then(() => {
            
            this.setState({
                message: ''
            });

        }).catch(error => {
            this.props.addNote({
                title: error.code,
                text: error.message,
                noteID: uudiv4(),
                livetime: 10000
            });
        });
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <Field value={this.state.message} onChange={this.handleChange.bind(this)}/>
                <input type='submit' value='Send' onClick={this.handleSubmit.bind(this)}/>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return { 
        auths: state.auths
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addNote: payload => dispatch.notifications.ADD_NOTIFICATION(payload)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sending);
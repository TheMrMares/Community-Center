import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import Reading from './Reading';
import Sending from './Sending';
import {firestore} from './../../firebase/index';
import {connect} from 'react-redux';
import {List} from 'immutable';

const StyledReading = styled(Reading)``;
const StyledSending = styled(Sending)``;
const Wrapper = styled.div`
    background: ${colors.smoothfair};
    border-radius: 3px;
    padding: 5px;
`;

class Shoutbox extends Component {
    constructor(){
        super()
        this.prime = true;
    }
    componentDidMount(){

        firestore.collection('shouts').orderBy('created', 'desc').limit(50).onSnapshot((data) => {
            let filteredData = List(data.docs).filter((item) => {
                if(item.ref.id !== 'template'){
                    return item;
                }
            });
            const timestampCond = (filteredData.get(0).data().created && filteredData.get(-1).data().created);
            if(filteredData.size > 0 && timestampCond){
                this.props.loadShouts(filteredData.toJS());
            }
        })
    }
    render(){
        return(
            <Wrapper className={this.props.className}>
                <StyledReading/>
                <StyledSending/>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadShouts: payload => dispatch.shouts.LOAD_SHOUTS(payload),
        addShouts: payload => dispatch.shouts.ADD_SHOUTS(payload)
    };
};
export default connect(null, mapDispatchToProps)(Shoutbox);
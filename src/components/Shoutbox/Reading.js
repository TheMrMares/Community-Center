import React, { Component } from 'react';
import styled from 'styled-components';
import colors from './../../constants/colors';
import {connect} from 'react-redux';
import Shout from './Shout';
import uuidv4 from 'uuidv4';

const Wrapper = styled.div`
    height: 400px;
    overflow-y: scroll;
    border: 1px solid ${colors.verylessfair};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
`;

class Reading extends Component {
    render(){
        return(
            <Wrapper className={this.props.className}>
                {this.props.shouts.map((item, index) => {
                    if(item){
                        let imageUrl = (item.data().authorUrl && item.data().authorUrl || 'error');
                        return(
                            <Shout
                                key={uuidv4()}
                                text={item.data().text}
                                uid={item.data().authorUid}
                                displayname={item.data().authorDisplayname}
                                url={imageUrl}
                            />
                        );
                    }
                })}
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return { 
        shouts: state.shouts
    };
};
export default connect(mapStateToProps, null)(Reading);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import * as actions from '../../store/action/allActions';

class Layout extends Component {

    componentDidMount(){
        this.props.onInitUsers();
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        users: state.user.users,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitUsers: () => dispatch(actions.initUsers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
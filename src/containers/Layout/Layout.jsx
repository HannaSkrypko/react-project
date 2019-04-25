import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header';
import Profile from '../Profile';
import Catalog from '../Catalog';
import * as actions from '../../store/action/allActions';

class Layout extends Component {

    componentDidMount(){
        this.props.onInitUsers();
    }

    render() {
        return (
            <div>
                <Header />

                <main>
                    <Route path="/" exact component={Catalog} />
                    <Route path="/profile" component={Profile} />
                </main>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
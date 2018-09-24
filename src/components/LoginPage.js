import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startFacebookLogin, startLink } from '../actions/auth';

export const LoginPage = ({ startLogin, startFacebookLogin, performLink, startLink }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            {(performLink) ? (
                <div>
                    <p>You must link to your old account, to be able to use both sign in methods.</p>
                    <button className="button" onClick={startLink}>Link your Accounts</button>
                </div>
            ) : (
                    <div>
                        <p>It's time to get your expenses under control.</p>
                        <button className="button" onClick={startLogin}>Login with Google</button>
                        <button className="button button--facebook" onClick={startFacebookLogin}>Login with Facebook</button>
                    </div>
                )}

        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startLink: () => dispatch(startLink()),
});

const mapStateToProps = (state) => ({
    performLink: (state.auth.user !== undefined)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
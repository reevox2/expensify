import authReducer from '../../reducers/auth';


test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'adwadafweFAEGaeGESgeGRrse'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({uid: action.uid});
});

test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT' };
    expect(authReducer({uid: action.uid}, action)).toEqual({});
});

test('should set up default state', () => {
    const action = { type: 'FOOBAR' };
    expect(authReducer(undefined, action)).toEqual({});
    expect(authReducer({uid: action.uid}, action)).toEqual({uid: action.uid});
});

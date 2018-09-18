import { login, logout, startLogin, startLogout} from '../../actions/auth';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

test('should set up login action object', () => {
    const uid = '21312ewqDEqwdAWDAWFEfgaeggs';
    expect(login(uid)).toEqual({
        type: 'LOGIN',
        uid
    })
});

test('should set up logout action object', () => {
    expect(logout()).toEqual({type: 'LOGOUT'})
});

// test('should fetch user credentials from firebase', (done) => {
//     startLogin().then(user => {
//         expect(user).toBeTruthy();
//         done();
//     })
// });

// test('should sign user out', done => {
//     startLogout().then((response)=>{
//         expect(response).toBeFalsy();
//         done();
//     })
// });
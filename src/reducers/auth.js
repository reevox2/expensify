export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LINK':
            return {
                user: action.user
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};
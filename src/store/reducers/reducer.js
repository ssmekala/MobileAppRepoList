import {GET_USERS_REPO_SUCCESS} from '../actions/actions'

const repoReducer = (state = {repoList:[]}, action) => {
    switch (action.type) {
        case GET_USERS_REPO_SUCCESS:
            return {...state, repoList: action.repoList};
        default:
            return state
    }
}

export default repoReducer;
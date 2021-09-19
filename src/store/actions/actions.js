export const GET_USERS_REPO_FETCH = 'GET_USERS_REPO_FETCH';
export const GET_USERS_REPO_SUCCESS = 'GET_USERS_REPO_SUCCESS';


export const getUsersRepoFetch = () => ({
    type: GET_USERS_REPO_FETCH
});

export const getUsersRepoSuccess = (repoList) => ({
    type: GET_USERS_REPO_SUCCESS,
    repoList
});
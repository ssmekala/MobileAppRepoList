import { getUsersRepoFetch, getUsersRepoSuccess } from "../actions/actions";

export function getUsersRepoRequest(searchInput) {

    return function (dispatch) {
        dispatch(getUsersRepoFetch());

        return fetch(`https://api.github.com/users/${searchInput}/repos`)
            .then(response => response.json())
            .then(repoList => dispatch(getUsersRepoSuccess(repoList)))
    }
}
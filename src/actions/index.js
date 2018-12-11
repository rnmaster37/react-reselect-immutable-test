export const loadAction = () => dispatch => {
    return fetch('/data.json')
    .then((r) => r.json())
    .then(json  => {
        dispatch({
            type: 'LOAD_ACTION',
            payload: json
        })
        return json
    })
}


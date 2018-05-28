export function loadingAction(bool) {
    return {
        type: 'LOADING',
        loading: bool
    }
}

export function itemsAction(items) {
    return {
        type: 'ITEMS',
        data: items
    }
}

export function fetchDataAction(url) {
    return (dispatch) => {
        dispatch(loadingAction(true))
        fetch(url)
        .then((response) => response.json())
        .then((response) => {
            dispatch(loadingAction(false))
            dispatch(itemsAction(response.results))
        })
    }
}

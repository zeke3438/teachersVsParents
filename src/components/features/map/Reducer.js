const initialState = {
    hover: false
};

const mapReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MAP_CURSOR_ENTER':
            return {
                hover: true
            }
        case 'MAP_CURSOR_LEAVE':
            return {
                hover: false
            }
        default:
            return state
    }
};

export default mapReducer;
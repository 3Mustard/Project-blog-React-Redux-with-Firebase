const initialState = {
    projects: [
        {id: '0', title: 'title 1', content: 'lalala'},
        {id: '1', title: 'title 2', content: 'weewoo'},
        {id: '2', title: 'title 3', content: 'vvv'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("create project error", action.error);
            return state;
        default:
            return state;
    }
}  

export default projectReducer;

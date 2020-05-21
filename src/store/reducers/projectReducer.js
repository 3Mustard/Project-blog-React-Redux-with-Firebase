const initialState = {
    projects: [
        {id: '0', title: 'title 1', content: 'lalala'},
        {id: '1', title: 'title 2', content: 'weewoo'},
        {id: '2', title: 'title 3', content: 'vvv'}
    ]
}

const projectReducer = (state = initialState, action) => {
    return state;
}  

export default projectReducer;
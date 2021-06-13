const initState = {
    projects: [
        { id: 1, title: 'the future of work', content: 'blah blah blah'},
        { id: 2, title: 'Always do your best', content: 'blah blah blah'},
        { id: 3, title: 'You are on your own', content: 'if someone who ignores you, upgrade!'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'ADD_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'ADD_PROJECT_ERROR':
            console.log('create project failed', action.err)
            return state;
        default:
            return state
    }
}

export default projectReducer
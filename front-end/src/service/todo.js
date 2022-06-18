import createAPI from '@Utils/createAPI'

export default createAPI('todo', {
    'all': {
        method: 'GET',
        path: 'todo/all',
    },
    'add': {
        method: 'POST',
        path: 'todo/add',
    },
})
import createAPI from '@Utils/createAPI'

export default createAPI('todo', {
    'all': {
        method: 'GET',
        path: 'todo/all',
    }
})
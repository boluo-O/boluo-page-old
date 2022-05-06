import { Search, Todo } from '@Components'
import './app.less'

const App = () => {

    return (
        <div className='app'>
            <Search />
            <Todo />
        </div>
    )
}

export default App
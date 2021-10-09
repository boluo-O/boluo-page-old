import { useState } from 'react'

import TodoList from './components/TodoList'
import todo from './service/todo'

import './app.less'
import { useEffect } from 'react'

const App = () => {
    const [todoData, setTodoData] = useState([])
    
    const initToDoData = async () => {
        let resData = await todo.all()
        setTodoData(resData)
    }
    
    useEffect(() => {
        initToDoData()
    }, [])

    return (
        <div className='app'>
            <header>菠萝TODO</header>
                <div className='todo-list'>
                    <div className='todoConstructor'>
                        <button onClick={() => console.log('hhhh')}>添加TODO</button>
                        <form></form>
                        <div>
                            <input defaultValue='需求' style={{width: 30}} />
                            <input />
                        </div>
                    </div>
                    <TodoList todoData={todoData} />
                </div>         
            <footer></footer>
        </div>
    )
}

export default App
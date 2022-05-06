import { useState, useEffect } from 'react'

import { EditableSpan } from '@Components'
import todo from '@Service/todo'
import './style.less'

const Todo = () => {
    const [todoData, setTodoData] = useState([])

    const initToDoData = async () => {
        let resData = await todo.all()
        setTodoData(resData)
    }

    useEffect(() => {
        initToDoData()
    }, [])

    return (
        <div className="todo-box">
            <div className='todo-list'>
                <div className='todo-constructor'>
                    <button onClick={() => console.log('hhhh')}>添加TODO</button>
                    <form></form>
                    <div>
                        <input defaultValue='需求' style={{ width: 30 }} />
                        <input />
                    </div>
                </div>
                <div className='todo-list'>
                    {todoData.map((item, index) => {
                        return (
                            <div className='todoItem-box'>
                                <div className='todoType'>{item.todoType || ''}</div>
                                <div className='description'>{item.description || ''}</div>
                                <EditableSpan value={item.todoText || ''} />
                                <div>
                                    <button>完成</button>
                                    <button>删除</button>
                                    <button>时钟</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo
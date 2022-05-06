import { useState, useEffect } from 'react'

import { EditableSpan } from '@Components'
import todo from '@Service/todo'
import './style.less'

const Todo = () => {
    const [todoData, setTodoData] = useState([])

    const getTodo = async () => {
        const resData = await todo.all()
        setTodoData(resData)
    }

    const todoTypeEnume = {
        '01': 'TODO',
        '02': 'READ',
        '03': 'STUDY',
        '04': 'SOLVE',
        '05': 'IDEA',
    }

    const renderTodoType = {
        'TODO': (
            <div className='type type-todo'>TODO</div>
        ),
        'READ': (
            <div className='type type-read'>READ</div>
        ),
        'STUDY': (
            <div className='type type-study'>STUDY</div>
        ),
        'SOLVE': (
            <div className='type type-solve'>SOLVE</div>
        ),
        'IDEA': (
            <div className='type type-idea'>IDEA</div>
        ),
    }


    useEffect(() => {
        getTodo()
    }, [])

    return (
        <div className='todo-box'>
            <div className='todo-constructor'>
                {/* <button onClick={() => console.log('hhhh')}>添加TODO</button>
                    <div>
                        <input defaultValue='需求' style={{ width: 30 }} />
                        <input />
                    </div> */}
            </div>
            <div className='todo-list'>
                {todoData.map((item, index) => {
                    const todoType = todoTypeEnume[item.todoType]
                    return (
                        <div className={`todo-item todo-item-${todoType}`}>
                            <div className='index'>{index}</div>
                            {renderTodoType[todoType]}
                            <div className='content'>{item.todoText || ''}</div>
                            {/* <EditableSpan value={item.todoText || ''} /> */}
                            <div className='opreate'>
                                <input type='checkbox' id='cbox2' value='second_checkbox' checked='checked' />                                        {/* <button>完成</button> */}
                                <button>删除</button>
                                {/* <button>时钟</button> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo
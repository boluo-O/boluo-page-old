import { useState, useEffect } from 'react'

import { EditableSpan, Icon, Modal } from '@Components'
import Checked from '@Assets/icons/Checked.svg'
import Unchecked from '@Assets/icons/Unchecked.svg'
import Delete from '@Assets/icons/Delete.svg'
import todo from '@Service/todo'
import './style.less'

const Todo = () => {
    const [todoData, setTodoData] = useState([])
    const [isfinished, setIsfinished] = useState(false)

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
            <div className='todo-total-info'>
                <div>已完成 1 个 </div>
                <div>未完成 1 个 </div>
                <a onClick={() => { }}>添加</a>
            </div>
            <div className='todo-list'>
                {todoData.map((item, index) => {
                    const todoType = todoTypeEnume[item.todoType]
                    return (
                        <div className={`todo-item todo-item-${todoType}`} key={index}>
                            {renderTodoType[todoType]}
                            <div className='content'>{item.todoText || ''}</div>
                            <div className='opreate'>
                                <div>完成</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Modal
                title="custom Modal"
                visible={true}
            // onOk={this.handleOk}
            // onCancel={this.handleCancel}
            >
                <p>自定义Modal</p>
                <p>自定义Modal</p>
            </Modal>
        </div>
    )
}

export default Todo
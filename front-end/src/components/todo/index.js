import { useState, useEffect } from 'react'

import { Modal } from 'antd'
import cls from 'classnames'

import { TODO_TYPE } from '@Assets/enume'
import ModalConstructor from './modal-constructor'
import io from '@Service'
import './style.less'

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [modalConfig, setModalConfig] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const getTodoList = async () => {
        try {
            const res = await io.todo.all()
            if (res) {
                setTodoList(res)
            }
        } catch (e) {
            console.log('error', e)
        }
    }

    const deleteTodo = async (id) => {
        Modal.confirm({
            content: '确定删除吗？',
            onOk: async () => {
                try {
                    const res = await io.todo.delete({ id: id })
                    if (res) {
                        getTodoList()
                    }
                } catch (e) {
                    console.log('error', e)
                }
            }
        })

    }

    const updateTodo = async (params) => {
        try {
            const res = await io.todo.update(params)
            if (res) {
                getTodoList()
            }
        } catch (e) {
            console.log('error', e)
        }
    }

    const showAddModal = () => {
        setModalConfig({ type: 'add' })
        setModalVisible(true)
    }

    const showEditModal = (item) => {
        setModalConfig({ type: 'edit', editTodoInfo: item })
        setModalVisible(true)
    }

    useEffect(() => {
        getTodoList()
    }, [])

    return (
        <div className='todo-box'>
            <div className='btn-add-todo' onClick={showAddModal}>添加</div>
            <div className='todo-total-info'>
                <div className='todo-total-info-item'>已完成 1 个 </div>
                <div className='todo-total-info-item'>未完成 1 个 </div>
            </div>
            <div className='todo-list'>
                {todoList.map((item, index) => {
                    const todoName = TODO_TYPE.find(v => v.value === item.type).name
                    return (
                        <div className={`todo-item todo-item-${todoName}`} key={index}>
                            <div className='type'>{todoName}</div>
                            <div className={cls('content', { completed: item.completed })}>{item.content || ''}</div>
                            <div className='opreate'>
                                <div onClick={() => updateTodo({ id: item.id, completed: !item.completed })}>完成</div>
                                <div onClick={() => showEditModal(item)}>编辑</div>
                                <div onClick={() => deleteTodo(item.id)}>删除</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* add | edit todo Moodal */}
            {
                modalVisible && <ModalConstructor
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    getTodoList={getTodoList}
                    {...modalConfig}
                />
            }
        </div>
    )
}

export default Todo
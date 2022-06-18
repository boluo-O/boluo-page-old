import { useState, useEffect } from 'react'

import { Button, Modal, Input, Form, Select } from 'antd'

// import todo from '@Service/todo'
import io from '@Service'
import './style.less'
const { TextArea } = Input

const Todo = () => {
    const [todoData, setTodoData] = useState([])
    const [isfinished, setIsfinished] = useState(false)
    // const [modalVisible, setModalVisible] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [form] = Form.useForm();

    const getTodo = async () => {
        try {
            const res = await io.todo.all()
            if (res) {
                setTodoData(res)
            }
        } catch (e) {
            console.log('error', e)
        }
    }

    const deleteTodo = async (id) => {
        try {
            const res = await io.todo.delete({ id: id })
            if (res) {
                getTodo()
            }
        } catch (e) {
            console.log('error', e)
        }
    }

    const todoTypeEnume = [
        { name: 'TODO', value: '01' },
        { name: 'READ', value: '02' },
        { name: 'STUDY', value: '03' },
        { name: 'SOLVE', value: '04' },
        { name: 'IDEA', value: '05' },
    ]
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

    const onOk = async () => {
        const todoInfo = form.getFieldsValue()
        console.log('todoInfo', todoInfo)
        try {
            const res = await io.todo.add(todoInfo)
            if (res) {
                setModalVisible(false)
                getTodo()
                console.log('res', res)
            }
        } catch (e) {
            console.log('e', e)
        }

    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <div className='todo-box'>
            <div className='btn-add-todo' onClick={() => setModalVisible(true)}>添加</div>
            <div className='todo-total-info'>
                <div className='todo-total-info-item'>已完成 1 个 </div>
                <div className='todo-total-info-item'>未完成 1 个 </div>
            </div>
            <div className='todo-list'>
                {todoData.map((item, index) => {
                    const todoName = todoTypeEnume.find(v => v.value === item.type).name
                    return (
                        <div className={`todo-item todo-item-${todoName}`} key={index}>
                            {renderTodoType[todoName]}
                            <div className='content'>{item.content || ''}</div>
                            <div className='opreate'>
                                <div>完成</div>
                                <div onClick={() => deleteTodo(item.id)}>删除</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Modal
                title='添加todo'
                visible={modalVisible}
                // onOk={() => setModalVisible(false)}
                onOk={onOk}
                onCancel={() => setModalVisible(false)}
            >
                <div className='todo-constructor-modal'>
                    <Form form={form} initialValues={{ type: '01' }}>
                        <Form.Item name='type' label='类型' rules={[{ required: true }]}>
                            <Select style={{ width: 120 }} options={todoTypeEnume.map((item, index) => ({ label: item.name, value: item.value }))} />
                        </Form.Item>
                        <Form.Item name='content' label='内容' rules={[{ required: true }]}>
                            <TextArea rows={3} />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default Todo
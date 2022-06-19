
import { Modal, Input, Form, Select } from 'antd'

import { TODO_TYPE } from '@Assets/enume'
import io from '@Service'
const { TextArea } = Input

const ModalConstructor = (props) => {
    const {
        type,   // add | edit
        editTodoInfo = {},
        modalVisible,
        setModalVisible,
        getTodoList,
    } = props

    const [form] = Form.useForm()
    const title = type === 'add' ? '添加TODO' : '编辑TODO'
    const initialValues = type === 'add'
        ? { type: '01' }
        : { type: editTodoInfo.type, content: editTodoInfo.content }

    const onOk = async () => {
        try {
            let res
            const todoInfo = form.getFieldsValue()

            if (type === 'add') {
                res = await io.todo.add(todoInfo)
            } else if (type === 'edit') {
                res = await io.todo.update({
                    id: editTodoInfo.id,
                    type: todoInfo.type,
                    content: todoInfo.content,
                })
            }
            if (res) {
                setModalVisible(false)
                getTodoList()
            }
        } catch (e) {
            console.log('e', e)
        }
    }

    return (
        <Modal
            title={title}
            visible={modalVisible}
            onOk={onOk}
            onCancel={() => setModalVisible(false)}
        >
            <div className='todo-constructor-modal'>
                <Form form={form} initialValues={initialValues}>
                    <Form.Item name='type' label='类型' rules={[{ required: true }]}>
                        <Select style={{ width: 120 }} options={TODO_TYPE.map((item, index) => ({ label: item.name, value: item.value }))} />
                    </Form.Item>
                    <Form.Item name='content' label='内容' rules={[{ required: true }]}>
                        <TextArea rows={3} />
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}
export default ModalConstructor
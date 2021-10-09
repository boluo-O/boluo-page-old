import TodoItem from '../TodoItem'

const TodoList = (props) => {
    const {
        todoData = []
    } = props

    return (
        <div className='todoList'>
            {todoData.map((item, index) => {
                return (
                    <TodoItem
                        key={index} 
                        todoType={item.todoType || ''}
                        description={item.description || ''}
                        todoText={item.todoText || ''}
                        completed={item.completed || ''}
                    />
                )
            })}
        </div>
    )
}

export default TodoList
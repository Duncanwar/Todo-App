function TodoItem({task,deleteTask, toggleCompleted}) {
    function handleChange(){
        toggleCompleted(task.id);
    }
    return (
        <div className='todo-item'>
            <input type='checkbox' checked={task.completed} onChange={handleChange} />     
            <p style={{
  textDecoration: task.completed ? "line-through":''}}>{task.text}</p>
            <button className='delete' onClick={()=> deleteTask(task.id)} >
            X </button>
        </div>
    );
}

export default TodoItem;

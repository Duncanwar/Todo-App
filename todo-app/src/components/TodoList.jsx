import React, { useState } from 'react';
import TodoItem from './TodoItem'

function TodoList() {
    const [tasks,setTasks] = useState([{
        id: 1,
        text: 'Doctor Appointment',
        completed: true
        },
        {
        id: 2,
        text: 'Meeting at School',
        completed: false
        }])

    const [text, setText] = useState('');
    function addTask(text){
        if(text === '') return
        const newTask ={
            id:Date.now(),
            text,
            completed:false
        };
        console.log(newTask);
        setTasks([...tasks, newTask])
        setText('')
    }
    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id){
        setTasks(tasks.map(task => {
            if(task.id === id){
                return {...task, completed:!task.completed}
            }else {
                return task;
            }
        }))
    }
    return (
        <div className='todo-list'>
            <h1> Todo App</h1>
            <input name="todo" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>addTask(text)}> Add New Task</button>
            {tasks.map(task=>(
                <TodoItem key={task.id} task={task} deleteTask={deleteTask} 
                toggleCompleted={toggleCompleted} />
            ))}
            
        </div>
    );
}

export default TodoList;

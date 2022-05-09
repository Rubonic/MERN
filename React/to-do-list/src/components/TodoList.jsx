import React, { useState } from 'react'

const TodoList = () => {
//NEED TO GET THE LIST ITEM TO LOG AS AN OBJECT WITH BOTH KEYS (todoItem & hasCompleted)
    const [formInfo, setFormInfo] = useState({
        todoItem : "",
        hasCompleted : false
    })

    let [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        }
        )
        console.log('changed form info -->', formInfo);
    }

    const createTodo = (e) => {
        e.preventDefault();
        let newTodo = formInfo; 
        setTodoList([...todoList, newTodo]);
        setFormInfo({
            todoItem : "",
            hasCompleted : false
        });
        
    }
    
    const toggleHasCompleted = (e, idx) => {
        let [...copyList] = todoList;
        copyList[idx].hasCompleted = e.target.checked;
        setTodoList(copyList);
    }

    const deleteTodoItem = (e,idx) => {
        console.log('delete item-->', todoList[idx]);
        let filteredCopy = todoList.filter((todoObj,i) => {
            return i != idx;
        })

        setTodoList(filteredCopy);
    }

    return (

        <div>
            <h1 className='p-2'>ToDo List</h1>
            <form onSubmit={ createTodo } className='d-flex flex-column form-group' style={{width: 400, margin: '0 auto'}} >
                <div>
                    <label htmlFor="todoItem">ToDo: </label>
                    <input className='form-control m-2' type="text" name="todoItem" onChange={ handleChange } value={formInfo.todoItem}/>
                </div>
                <input className='btn btn-success' style={{width: 100, margin: '0 auto'}} type="submit" />
            </form>
            <hr />
            {
                todoList.map((todoObj, idx) => {
                    
                    return (
                        
                        <div key={idx} className="d-flex justify-content-center align-items-center">
                            <p style={{textDecoration: todoObj.hasCompleted? 'line-through' : 'none'}}>{todoObj.todoItem}</p>
                            <input onChange={(e) => toggleHasCompleted(e,idx) } className="form-check mx-2" style={{marginTop: -15}} type="checkbox" />
                            <p className='btn btn-sm btn-outline-danger' onClick={ (e) => deleteTodoItem(e,idx) }>Delete Task</p>
                        </div>
                        
                        )
                    })
                }
        </div>
    )
}

export default TodoList

import React,  { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// importamos la hoja de estilos de task.scss
import '../../styles/task.css'


export 
const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task]);
// function that returns a badge depending on the level of the task
    function taskLevelBadge(){
        switch(task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )    
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )    
            default:
                break;    
        }
        
    }
    // Function that returns icon depending on completion of the task

    function taskCompletedIcon(){
        if(task.completed){
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green', fontSize:'20px'}}></i>)
        }else{
            return (<i onClick={()=> complete(task)} className='bi-toggle-off task-action' style={{color: 'grey', fontSize: '20px'}}></i>)

        }

    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'Line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'

    }

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
        <th>
            <span className='ms-2'>{task.name}</span>
        </th> 

        <td className='align-middle'>
        <span>{task.description}</span>
         </td>

        <td className='align-middle'>
            {/* Execution of function to return badge element */}
            {taskLevelBadge()}
        </td>
        <td className='align-middle'>
            {/* Execution of function to return icon depending on completion */}
            {taskCompletedIcon()}
            <i className='bi-trash task-action' style={{color: 'tomato', fontSize: '20px'}} onClick={() => remove(task)}></i>
             
        </td>

        </tr>
        
    );
};

// El instaceOff verifica que el dato que recibimos corresponda al valor establecido 
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


// export default TaskComponent;



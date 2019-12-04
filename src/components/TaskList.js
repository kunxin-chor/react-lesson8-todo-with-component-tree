import React from 'react'
import Task from './Task'


export default function TaskList(props)
{
    return (
        <ul>
        { 
          props.tasks.map( (t) => {
            return <Task task={t} 
                         delete={props.delete}
                         edit={props.edit}
                         handleCheck={props.handleCheck}     
                    />
          }) 
        }
       </ul>
     )
}
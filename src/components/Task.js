import React from 'react'

export default function Task(props)
{
    return (<li>
        {props.task.title}
        <input type='checkbox'
            checked={props.task.done}
            onChange={
              () => {
                  props.handleCheck(props.task)
              }
            }
            />
        <button onClick={
            () => {
                  props.delete(props.task)
            }
         }>x</button>
        <button onClick={
            () => {
                props.edit(props.task)
            }
        }
        >Edit</button>
    </li>);

}
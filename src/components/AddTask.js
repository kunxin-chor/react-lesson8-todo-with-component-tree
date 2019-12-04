import React from 'react'

export default class AddTask extends React.Component {
    state = {
        title:""
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    confirm =() => {
        this.props.add({
            _id: Math.random() * 1000000 + 9999,
            title: this.state.title,
            done:false
        })
    }
    
    render() {
        return (
            <div>
                <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                <br/>
                <button onClick={this.confirm}>Add New Task</button>
            </div>
            )
    }
}
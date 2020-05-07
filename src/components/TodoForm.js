import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo : ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({ todo: "" })

    }
    handleChange = e => {
        this.setState({
            todo: e.target.value
        })
        console.log(this.state.todo)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="todoItem" value={this.state.todo} onChange={this.handleChange} />
                <button>Add Item</button>
            </form>
        )
    }
}

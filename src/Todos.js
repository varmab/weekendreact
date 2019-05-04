import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(e)=>{
        var todo=e.target.value;
        this.setState({
            todo:todo
        },()=>{
            console.log(this.state.todo)
        })
    }

    addTodo=(e)=>{
        e.preventDefault();

        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    render(){
        return(
            <div className="todos">
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} name="todo" onChange={this.onTodoChange}/>
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {
                        this.state.todos.map((todo)=>{
                            return <li key={todo}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos
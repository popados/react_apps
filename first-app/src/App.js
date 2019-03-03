import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData,
            newTodo: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleInput(e) {
      this.setState({
        newTodo: e.target.value
      })
    }

    handleChange(id) {
      console.log("changed", id)
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
      })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
          handleChange={this.handleChange}/>)

        return (
          <div>
            <div>
              <Header />
            </div>
            <div className="todo-list">
              {todoItems}
              <input type="text"
               value={this.state.newTodo}
               onChange={this.handleInput}/>
            </div>
          </div>
        )
    }
}

export default App

//can add a nav bar and drop down menus
//todo list(main app component)
//footer for my app

//instance of header

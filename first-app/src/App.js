import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)

        return (
          <div>
          //instance of header
            <div>
              <Header />
            </div>
            <div className="todo-list">
              {todoItems}
            </div>
            <div>
              <Footer />
            </div>
          </div>
        )
    }
}

export default App

//can add a nav bar and drop down menus
//todo list(main app component)
//footer for my app

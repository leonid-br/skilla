import { Component } from 'react';
import { v4 } from 'uuid';

import s from './Contacts.module.css';
import initialTodos from './initialTodos.json';

import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';

class Contacts extends Component {
    state = { todos: initialTodos, filter: '' };

    addTodo = text => {
        const newTodo = {
            id: v4(),
            complited: false,
            text,
        };
        this.setState(({ todos }) => ({
            todos: [newTodo, ...todos],
        }));
    };

    deleteTodo = id => {
        this.setState(({ todos }) => ({
            todos: todos.filter(todo => todo.id !== id),
        }));
    };

    toggleComplited = id => {
        this.setState(({ todos }) => ({
            todos: todos.map(todo =>
                todo.id === id
                    ? { ...todo, complited: !todo.complited }
                    : todo,
            ),
        }));
    };

    filterTodo = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    getVisibleTodos = () => {
        const { filter, todos } = this.state;
        const normalizeFilter = filter.toLocaleLowerCase();
        return todos.filter(todo =>
            todo.text
                .toLocaleLowerCase()
                .includes(normalizeFilter),
        );
    };

    getComplitedTodoCount = () => {
        const { todos } = this.state;
        return todos.reduce(
            (acc, todo) => (todo.complited ? acc + 1 : acc),
            0,
        );
    };

    render() {
        const { todos, filter } = this.state;
        const {
            filterTodo,
            addTodo,
            deleteTodo,
            toggleComplited,
            getVisibleTodos,
            getComplitedTodoCount,
        } = this;

        const totalTodoCount = todos.length;
        const comlitedTodosCount = getComplitedTodoCount();
        const filtredTodo = getVisibleTodos();

        return (
            <div className={s.container}>
                <h2>TodoList</h2>
                <p>Всего Todos: {totalTodoCount}</p>
                <p>Выполнено Todos: {comlitedTodosCount}</p>
                <TodoEditor onSubmit={addTodo} />
                <Filter value={filter} onFilter={filterTodo} />
                <TodoList
                    todos={filtredTodo}
                    onDeleteTodo={deleteTodo}
                    onToggleComplited={toggleComplited}
                />
            </div>
        );
    }
}

export default Contacts;

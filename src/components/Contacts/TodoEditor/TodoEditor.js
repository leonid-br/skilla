import { Component } from 'react';

import s from './TodoEditor.module.css';

class TodoEditor extends Component {
    state = { message: '' };

    handleChange = e => {
        this.setState({ message: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({ message: '' });
    };

    render() {
        return (
            <form
                className={s.form}
                onSubmit={this.handleSubmit}
            >
                <textarea
                    className={s.text}
                    value={this.state.message}
                    onChange={this.handleChange}
                ></textarea>
                <button type="submit" className={s.btn}>
                    Save
                </button>
            </form>
        );
    }
}

export default TodoEditor;

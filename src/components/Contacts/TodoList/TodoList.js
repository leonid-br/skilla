import s from './TodoList.module.css';
import classNames from 'classnames/bind';

const TodoList = ({
    todos,
    onDeleteTodo,
    onToggleComplited,
}) => {
    const complitedText = classNames.bind(s);

    return (
        <ul className={s.list}>
            {todos.map(({ id, text, complited }) => {
                const className = complitedText('text', {
                    textComplited: complited,
                });

                return (
                    <li key={id} className={s.todo}>
                        <input
                            type="checkbox"
                            checked={complited}
                            onChange={() =>
                                onToggleComplited(id)
                            }
                        />
                        <p className={className}>{text}</p>
                        <button
                            type="button"
                            className={s.btn}
                            onClick={() => onDeleteTodo(id)}
                        >
                            Удалить
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;

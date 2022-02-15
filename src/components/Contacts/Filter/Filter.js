import s from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
    return (
        <div>
            <p className={s.text}>Поиск по Todo:</p>
            <input
                type="text"
                value={value}
                onChange={onFilter}
                className={s.input}
                placeholder="введите текст"
            />
        </div>
    );
};
export default Filter;

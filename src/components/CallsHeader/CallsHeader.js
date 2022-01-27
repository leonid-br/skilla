import st from './CallsHeader.module.css';
import Icon from '../Icon';
import ava from '../../img/avatar.jpg';

const CallsHeader = ({ onChange }) => {
    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
    };
    const dateNow = new Date().toLocaleString('ru-RU', options);

    const handleChange = e => {
        e.preventDefault();
        onChange(e.target.value);
    };
    return (
        <>
            <div className={st.header}>
                <select
                    className={st.header__data}
                    onChange={handleChange}
                >
                    <option value="dateNow">{dateNow}</option>
                    <option value="three">3 дня</option>
                    <option value="week">Неделя</option>
                    <option value="month">Месяц</option>
                    <option value="year">Год</option>
                    <option value="calendar">calendar</option>
                </select>
                <ul className={st.header__list}>
                    <li className={st.header__item}>
                        Новые звонки <span>20 из 30 шт</span>
                    </li>
                    <li className={st.header__item}>
                        Качество разговоров <span>40%</span>
                    </li>
                    <li className={st.header__item}>
                        Конверсия в заказ <span>67%</span>
                    </li>
                </ul>
                <Icon name={'search'} className={`${st.icon}`} />
                <span className={st.name}>
                    ИП Сидорова Александра Михайловна
                </span>
                <Icon
                    name={'vector'}
                    className={`${st.vector}`}
                />
                <img
                    src={ava}
                    alt={'avatar'}
                    className={st.ava}
                />
                <Icon
                    name={'vector'}
                    className={`${st.vector}`}
                />
            </div>
        </>
    );
};

export default CallsHeader;

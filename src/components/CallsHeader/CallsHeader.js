import { useState } from 'react';

import st from './CallsHeader.module.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Icon from '../Icon';
import ava from '../../img/avatar.jpg';

const CallsHeader = ({ onChange }) => {
    const [value, setValue] = useState('');
    const options = {
        month: 'long',
        day: 'numeric',
    };
    const dateNow = new Date().toLocaleString('ru-RU', options);

    const handleChange = e => {
        e.preventDefault();
        onChange(e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <div className={st.header}>
                <div className={st.header__data}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel
                            className={st.header__input}
                            id="label"
                        >
                            <em>{dateNow}</em>
                        </InputLabel>
                        <Select
                            className={st.header__select}
                            labelId="label"
                            id="select"
                            onChange={handleChange}
                            autoWidth
                            label="date"
                            value={value}
                        >
                            <MenuItem value="dateNow">
                                {dateNow}
                            </MenuItem>
                            <MenuItem value="three">
                                3 дня
                            </MenuItem>
                            <MenuItem value="week">
                                Неделя
                            </MenuItem>
                            <MenuItem value="month">
                                Месяц
                            </MenuItem>
                            <MenuItem value="year">Год</MenuItem>
                            <MenuItem value="calendar">
                                Выбрать даты{' '}
                                <Icon
                                    name={'search'}
                                    className={`${st.search}`}
                                />
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
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

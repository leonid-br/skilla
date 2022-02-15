import { NavLink } from 'react-router-dom';

import Icon from '../Icon';
import Button from '../CallsRout/Button';
import st from './MenuForm.module.css';

const MenuForm = () => {
    const setActiveClass = ({ isActive }) =>
        isActive
            ? `${st.header__item} ${st.activeNavLink}`
            : `${st.header__item}`;

    return (
        <>
            <header className={st.header}>
                <div className={st.container}>
                    <NavLink to="/">
                        <Icon
                            name={'logo'}
                            className={st.header__logo}
                        />
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink
                                to="/results"
                                className={setActiveClass}
                            >
                                <Icon name={'results'} />
                                <span>Итоги</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/orders"
                                className={setActiveClass}
                            >
                                <Icon name={'orders'} />
                                <span>Заказы</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={setActiveClass}
                            >
                                <Icon name={'messages'} />
                                <span>Сообщения</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/calls"
                                className={setActiveClass}
                            >
                                <Icon name="calls" />
                                <span>Звонки</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacts"
                                className={setActiveClass}
                            >
                                <Icon name={'contacts'} />
                                <span>Контрагенты</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/documents"
                                className={setActiveClass}
                            >
                                <Icon name={'documents'} />
                                <span>Документы</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/performers"
                                className={setActiveClass}
                            >
                                <Icon name={'performers'} />
                                <span>Исполнители</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/reports"
                                className={setActiveClass}
                            >
                                <Icon name={'reports'} />
                                <span>Отчеты</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/knowledge-base"
                                className={setActiveClass}
                            >
                                <Icon name={'knowledge-base'} />
                                <span>База знаний</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/settings"
                                className={setActiveClass}
                            >
                                <Icon name={'settings'} />
                                <span>Настройки</span>
                            </NavLink>
                        </li>
                    </ul>

                    <Button
                        className={st.button}
                        text={'Добавить заказ'}
                        logoName={'plus'}
                    />
                    <Button
                        className={st.button}
                        text={'Оплата'}
                        logoName={'exclamation-poin'}
                    />
                </div>
            </header>
        </>
    );
};

export default MenuForm;

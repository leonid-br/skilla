import { Component } from 'react';

import s from './Orders.module.css';

class Orders extends Component {
    state = { value: false };

    onToggle = () => {
        this.setState(prevState => ({
            value: !prevState.value,
        }));
    };

    render() {
        return (
            <div className={s.container}>
                <div className={s.menu}>
                    <ul>
                        <li>Пункт 1</li>
                        <li>Пункт 2</li>
                        <li>Пункт 3</li>
                    </ul>
                    <button
                        type="button"
                        className={s.btn}
                        onClick={this.onToggle}
                    >
                        {this.state.value
                            ? 'Скрыть меню'
                            : 'Показать меню'}
                    </button>
                </div>
                {this.state.value ? (
                    <div className={s.dropMenu}>
                        Выпадающее меню
                    </div>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default Orders;

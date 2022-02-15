import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Results.module.css';

class Results extends Component {
    static defaultProps = { initionValue: 0 };

    static propTypes = {
        initionValue: PropTypes.number,
    };

    state = { value: this.props.initionValue };

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    handleDecrimant = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };

    render() {
        return (
            <div className={s.container}>
                <span className={s.value}>
                    {this.state.value}
                </span>
                <div>
                    <button
                        type="button"
                        className={s.btn}
                        onClick={this.handleIncrement}
                    >
                        Увеличить на 1
                    </button>
                    <button
                        type="button"
                        className={s.btn}
                        onClick={this.handleDecrimant}
                    >
                        Уменьшить на 1
                    </button>
                </div>
            </div>
        );
    }
}

export default Results;

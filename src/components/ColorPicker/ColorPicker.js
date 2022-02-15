import { Component } from 'react';

import s from './ColorPicker.module.css';

class ColorPicker extends Component {
    state = { activeOptionIdx: 0 };

    makeOptionClassName = index => {
        const optionClass = [`${s.option}`];
        if (index === this.state.activeOptionIdx) {
            optionClass.push(`${s.optionActive}`);
        }
        return optionClass.join(' ');
    };

    setActiveIdx = index => {
        this.setState({ activeOptionIdx: index });
    };

    render() {
        const { options } = this.props;
        const { activeOptionIdx } = this.state;
        const { label } = options[activeOptionIdx];

        const { color } = options[activeOptionIdx];

        return (
            <div
                className={s.container}
                style={{ backgroundColor: color }}
            >
                <h2 className={s.title}>ColorPicker</h2>
                <p className={s.subTitle}>
                    Bыбран цвет: {label}
                </p>
                <div className={s.box}>
                    {options.map(({ label, color }, index) => (
                        <span
                            key={label}
                            className={this.makeOptionClassName(
                                index,
                            )}
                            style={{
                                backgroundColor: color,
                            }}
                            onClick={() =>
                                this.setActiveIdx(index)
                            }
                        ></span>
                    ))}
                </div>
            </div>
        );
    }
}

export default ColorPicker;

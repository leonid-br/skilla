import { v4 } from 'uuid';
import Icon from '../Icon';
import st from './Call.module.css';
import patrik from '../../img/nonPhoto.jpg';

const Call = ({
    id,
    callType,
    date,
    avatar,
    fromNumber,
    toNumber,
    company,
    time,
}) => {
    const callTime = date
        .split(' ')[1]
        .split(':')
        .slice(0, -1)
        .join(':');

    const getLengthCall = time => {
        const hours = Math.floor(time / 60 / 60);
        const minutes = Math.floor(time / 60) - hours * 60;
        const seconds = time % 60;
        return [
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0'),
        ].join(':');
    };

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    return (
        <>
            <tr key={v4()} className={st.call__row}>
                <td>
                    {callType === '1' ? (
                        <Icon
                            name={'in-call'}
                            className={st.icon}
                        />
                    ) : (
                        <Icon
                            name={'out-call'}
                            className={st.icon}
                        />
                    )}
                </td>
                <td>{id}</td>
                <td>
                    <img
                        src={avatar ? avatar : `${patrik}`}
                        alt="avatar"
                        width={32}
                        height={32}
                    />
                </td>
                <td>{fromNumber}</td>
                <td>{company}</td>
                <td>
                    {getRandomInt(-10, 10) > 0 ? (
                        <Icon
                            name={'green-dot'}
                            className={st.icon}
                        />
                    ) : (
                        <Icon
                            name={'red-dot'}
                            className={st.icon}
                        />
                    )}
                </td>
                <td>{getLengthCall(time)}</td>
            </tr>
        </>
    );
};

export default Call;

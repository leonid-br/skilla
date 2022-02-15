import { useEffect, useState } from 'react';

import st from './CallsList.module.css';

import Icon from 'components/Icon';
import Pagination from 'components/CallsRout/Pagination';
import TableBody from 'components/CallsRout/TableBody';

import fetchContactsData from 'service/getList-api';
import getDateToday from 'helpers/getDateToday';

const CallsList = ({ period }) => {
    const [calls, setCalls] = useState('');
    const [pagination, setPagination] = useState('');
    const [render, setRender] = useState('');
    const [status, setStatus] = useState('pending');
    const [callType, setCallType] = useState('all');

    const dateNow = new Date();
    const [dStart, dEnd] = getDateToday(dateNow, period);

    useEffect(() => {
        fetchContactsData(dStart, dEnd)
            .then(r => {
                setCallType('all');
                setCalls(r);
                setRender(r);
                setPagination(r);
                setStatus('resolved');
            })
            .catch(error => console.log(error));
    }, [dStart, dEnd, period]);

    if (status === 'pending') {
        return (
            <>
                <h2>Loaded...</h2>
            </>
        );
    }

    const handleChange = e => {
        e.preventDefault();

        setCallType(e.target.value);
        e.target.value === 'all'
            ? setPagination(calls)
            : setPagination(
                  calls.filter(
                      call => call.in_out === e.target.value,
                  ),
              );
    };

    const onCurrentItem = currentRender => {
        setRender(currentRender);
        window.scrollTo({
            top: -1000,
            behavior: 'smooth',
        });
    };

    if ((status === 'resolved') & (calls.length < 50))
        return (
            <>
                <div className={st.calls__list}>
                    <div className={st.calls__list_mistakes}>
                        <span>Все ошибки</span>
                        <Icon
                            name={'vector'}
                            className={`${st.vector}`}
                        />
                    </div>

                    <table className={st.calls__table}>
                        <thead className={st.calls__table_head}>
                            <tr>
                                <th>
                                    <select
                                        value={callType}
                                        onChange={handleChange}
                                        className={st.select}
                                    >
                                        <option value="all">
                                            Все звонки
                                        </option>
                                        <option value="1">
                                            Входящие
                                        </option>
                                        <option value="0">
                                            Исходящие
                                        </option>
                                    </select>
                                </th>
                                <th>Время</th>
                                <th>Сотрудник</th>
                                <th>Звонок</th>
                                <th>Источник</th>
                                <th>Оценка</th>
                                <th>Длительность</th>
                            </tr>
                        </thead>

                        <TableBody data={render} />
                    </table>
                </div>
            </>
        );

    if ((status === 'resolved') & (calls.length > 50))
        return (
            <>
                <div className={st.calls__list}>
                    <div className={st.calls__list_mistakes}>
                        <span>Все ошибки</span>
                        <Icon
                            name={'vector'}
                            className={`${st.vector}`}
                        />
                    </div>

                    <table className={st.calls__table}>
                        <thead className={st.calls__table_head}>
                            <tr>
                                <th>
                                    <select
                                        value={callType}
                                        onChange={handleChange}
                                        className={st.select}
                                    >
                                        <option value="all">
                                            Все звонки
                                        </option>
                                        <option value="1">
                                            Входящие
                                        </option>
                                        <option value="0">
                                            Исходящие
                                        </option>
                                    </select>
                                </th>
                                <th>Время</th>
                                <th>Сотрудник</th>
                                <th>Звонок</th>
                                <th>Источник</th>
                                <th>Оценка</th>
                                <th>Длительность</th>
                            </tr>
                        </thead>
                        <TableBody data={render} />
                    </table>
                    <div className={st.pagination}>
                        <Pagination
                            itemsPerPage={25}
                            data={pagination}
                            currentRender={onCurrentItem}
                        />
                    </div>
                </div>
            </>
        );
};

export default CallsList;

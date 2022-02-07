import Call from '../Call';

import st from './TableBody.module.css';

const TableBody = ({ data }) => {
    return (
        <>
            <tbody className={st.calls__table_body}>
                {data.map(
                    ({
                        id,
                        in_out,
                        date,
                        person_avatar,
                        from_number,
                        to_number,
                        contact_company,
                        time,
                    }) => (
                        <Call
                            key={id}
                            id={id}
                            callType={in_out}
                            date={date}
                            avatar={person_avatar}
                            fromNumber={from_number}
                            toNumber={to_number}
                            company={contact_company}
                            time={time}
                        />
                    ),
                )}
            </tbody>
        </>
    );
};

export default TableBody;

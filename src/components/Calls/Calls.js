import { useState } from 'react';

import st from './Calls.module.css';
import CallsHeader from '../CallsHeader';
import CallsList from '../CallsList';

const Calls = () => {
    const [period, setPeriod] = useState('dateNow');
    const onChangePeriod = period => {
        setPeriod(period);
    };

    return (
        <>
            <div className={st.calls}>
                <CallsHeader onChange={onChangePeriod} />
                <CallsList period={period} />
            </div>
        </>
    );
};

export default Calls;

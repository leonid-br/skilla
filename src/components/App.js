// import st from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import st from './App.module.css';
// import contactsData from '../service/getList-api';
import Calls from './Calls/Calls';

const MenuForm = lazy(() =>
    import(/*webpackChunkName: "MenuForm"*/ './MenuForm'),
);

function App() {
    // const onLoad = () => {
    //     contactsData('2021-02-22', '2021-02-22');
    // };

    return (
        <>
            <Suspense fallback={<h2>Loading...</h2>}>
                <div className={st.flex}>
                    <MenuForm />
                    <Routes>
                        <Route
                            exact
                            path="/calls"
                            element={<Calls />}
                        />
                    </Routes>
                </div>
                {/* <div className={st.tmp}>123</div> */}
                {/* <button type="button" onClick={onLoad}>
                click
            </button> */}
            </Suspense>
        </>
    );
}

export default App;

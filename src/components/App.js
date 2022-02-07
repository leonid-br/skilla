import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import st from './App.module.css';

import Calls from './Calls/Calls';

const MenuForm = lazy(() =>
    import(/*webpackChunkName: "MenuForm"*/ './MenuForm'),
);

function App() {
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
            </Suspense>
        </>
    );
}

export default App;

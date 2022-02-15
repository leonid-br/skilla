import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import st from './App.module.css';
import data from 'data';

import Calls from './CallsRout/Calls';
import Contacts from './Contacts';
import Results from './Results';
import Orders from './Orders';
import ColorPicker from './ColorPicker';

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
                        <Route
                            path="/contacts"
                            element={<Contacts />}
                        />
                        <Route
                            path="/results"
                            element={
                                <Results initionValue={10} />
                            }
                        />
                        <Route
                            path="/orders"
                            element={<Orders />}
                        />
                        <Route
                            path="/messages"
                            element={
                                <ColorPicker options={data} />
                            }
                        />
                    </Routes>
                </div>
            </Suspense>
        </>
    );
}

export default App;

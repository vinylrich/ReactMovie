import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/MvDetail";
function App() {
    return <Router>
        <Switch>
            <Route path="/movie/:id">
                <Detail/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>;
}
//use effect를 사용하면 지정한 변수가 바뀔때만 실행하는 함수를 사용할 수 있다.
export default App;
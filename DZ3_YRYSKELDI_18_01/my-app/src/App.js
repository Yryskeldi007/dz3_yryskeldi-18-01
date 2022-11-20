import './App.css';
import ReactBook from "./component/reactBook/ReactBook";
import ReactCopy from "./component/reactCopy/ReactCopy";
import Register from "./component/register/Register";

function App() {
    return (
        <div className="App">
            <ReactBook/>
            <ReactCopy/>
            <Register/>
        </div>
    );
}

export default App;

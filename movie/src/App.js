import Button from "./Button";
import { useState , useEffect } from "react";


function App() {
    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([])
    const onChange = (event) => setTodo(event.target.value); // setTodo -> todo를 인자값으로 바꾸는 것(여기서는 EVENT.TARGET.VALUE)
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo == "") {
            return;
        }
        setTodos(currentArray => [todo,...currentArray])
        setTodo("")
    };
    return (
        <div>
            <h1>Todos ({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input value = {todo} onChange={onChange} type="text" placeholder="write your to do.."/>
                <button>Add to Do</button>
            </form>
            <hr/>
            {todos.map((todo,index) => <li key={index}>{todo}</li>)}
        </div>
    );
}
//use effect를 사용하면 지정한 변수가 바뀔때만 실행하는 함수를 사용할 수 있다.
export default App;
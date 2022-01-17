import Button from "./Button";
import { useState , useEffect} from "react";

function App() {
    const [counter,setValue] = useState(0)
    const [keyword,setKeyword] = useState("")
    const onClick = () => setValue((prev) => prev+1);
    const onChange = (event)=> setKeyword(event.target.value)
    useEffect(() => {
        console.log("i run when keyword changes")
    },[keyword])
    useEffect( ()=>{
        console.log("i run when counter changes")
    },[counter])
  return (
    <div className="App">
        <input
            value= {keyword}
            onChange={onChange}
            type = "text"
            placeholder="Search here.."/>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
    </div>
  );
}
//use effect를 사용하면 지정한 변수가 바뀔때만 실행하는 함수를 사용할 수 있다.
export default App;
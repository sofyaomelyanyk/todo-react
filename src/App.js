import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { ListTodo } from "./components/ListTodo/ListTodo";
import { Header } from "./components/Header/Header";
import { Plug } from "./components/Plug/Plug";
import { useState } from "react";
import { Container } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      {todo.length >= 1 ? <ListTodo todo={todo} setTodo={setTodo} /> : <Plug />}
    </Container>
  );
}

export default App;

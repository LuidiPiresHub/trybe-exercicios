import { Component } from "react";

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Escovar os Dentes', 'Me arrumar', 'Ir pro curso', 'Dormir'];

class App extends Component {
  render() {
    return (
      <ul>{tasks.map((tarefa) => Task(tarefa))}</ul>
    );
  }
}

export default App;

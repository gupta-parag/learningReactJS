class Hello extends React.Component {
  render() {
    return <h1>Hello there</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello></Hello>
        <Hello></Hello>
        <Hello></Hello>
        <Hello></Hello>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));

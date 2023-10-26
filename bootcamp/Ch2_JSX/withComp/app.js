class App extends React.Component {
  render() {
    return (
      <div>
        <Hello></Hello>
        <FirmName></FirmName>
        <JSXDemo></JSXDemo>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));

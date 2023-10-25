function Hello() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

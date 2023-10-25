class JSXDemo extends React.Component {
  render() {
    let height = 1200;
    return (
      <div>
        <h1>Cats</h1>
        <img src="./assets/cat.avif" alt="Cat picture 1" height={height} />
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cat picture 2"
          height={height}
        />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo></JSXDemo>, document.getElementById("root"));

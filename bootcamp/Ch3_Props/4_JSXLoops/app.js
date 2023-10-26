class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          name="Jessica"
          hobbies={["reading", "writing", "singinng", "cooking"]}
        ></Hello>

        <Hello name="Rachel" hobbies={["pool", , "IG", "exercise"]}></Hello>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          from="Parag"
          to="Jackie"
          age={[32, 30]}
          img="https://unsplash.com/photos/a-person-is-swimming-in-the-water-near-a-coral-reef-V1NTzSrnXvw"
          alt="Picture of a diver goung straight down the ocean"
        />
        <Hello
          from="PG"
          to="Brittany"
          age={[24, 22]}
          img="https://unsplash.com/photos/a-view-of-a-mountain-range-at-sunset-bwcxNg8dkiI"
          alt="Picture of a mountain"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

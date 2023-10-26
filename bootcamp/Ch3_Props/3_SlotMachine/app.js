class App extends React.Component {
  render() {
    const slotsPicker = () => {
      let slots = ["mango", "banana", "apple"];
      let slotArr = [];
      for (let i = 0; i < 3; i++) {
        slotArr.push(slots[Math.floor(Math.random() * 3)]);
      }
      return slotArr;
    };
    return (
      <div>
        <h1>Slot Machine</h1>
        <Hello data={slotsPicker()}></Hello>
        <Hello data={slotsPicker()}></Hello>
        <Hello data={slotsPicker()}></Hello>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));

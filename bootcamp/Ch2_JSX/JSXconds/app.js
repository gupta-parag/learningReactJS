const getNum = () => {
  return Math.ceil(Math.random() * 10);
};

class ComponentOne extends React.Component {
  render() {
    let num = getNum();
    return (
      <div>
        <h1>The random number is : {num}</h1>
        <p>{num === 5 ? "You are Lucky !!!" : "You are doomed"}</p>
      </div>
    );
  }
}

ReactDOM.render(<ComponentOne></ComponentOne>, document.getElementById("root"));

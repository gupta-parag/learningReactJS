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
        <figure>
          {num === 5 && (
            <img src="https://images.unsplash.com/photo-1573995975633-faee0123f31f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          )}
        </figure>
      </div>
    );
  }
}

ReactDOM.render(<ComponentOne></ComponentOne>, document.getElementById("root"));

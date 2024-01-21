class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Playing around with image tag</h1>
        <img src="lena-polishko-zq6G-yFIYiY-unsplash.jpg" height="1080px" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));

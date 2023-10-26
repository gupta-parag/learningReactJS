### JSX - Javascript syntax Extension or Javascript plus XML

It is just syntactical sugar for React. If there is no transpiler then

- `<h1>Hello!</h1>`
- `React.createElement('h1', null, 'My Image' )`

- `<Div>`
  `<h1>Hello!</h1> `
  `<img src='./image.png'/>`
  `</Div>`
- `React.createElement('div', null,`
  `React.createElement('h1', null, 'My Image'),`
  `React.createElement('img', {src:'./image.png'}))`

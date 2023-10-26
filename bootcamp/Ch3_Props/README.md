## Learning about Props in React components

#### - can be referred using `this.props.propName` or `props.propName`

          - `<Hello name="Jessica" age='27'>` can be referred as `this.props.name` and `this.props.age`

#### - Properties are immutable `<Hello name="Jessica" age='27'>`

          - `this.props.name='Rachel` and `this.props.age='29'` will retrun error

### default values of props

          - `static defaultProps={
              name : 'Jessica',
              hobbies : ['swimming', 'reading']
          }`

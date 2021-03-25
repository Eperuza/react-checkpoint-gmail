// jsx
// declarative
// TRANSPILE!!

// Accepts an object as an argument, called 'props'
const Thumbnail = function() {
  return (
    <div>Our Thumbnail!</div>
  )
}

// props = {text: 'This is a picture'}
const AuthorPic = function(object) {
  return (
    // Curlies say that whatever is inside needs to be interpreted as JS
    <div>
      <div>{object.description}</div>
      <div>{object.image}</div>
    </div>
  )
}

// Functional Component:
// props! like 'properties'

const Card = (props) => (
  <div>{props.text}
    <Thumbnail />
    <AuthorPic className="someClass" description="Some other text!" image="image source" />
  </div>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    // bind, call, apply!
    this.countIncrementer = this.countIncrementer.bind(this)
  }

  countIncrementer() {
    //this.state.count ++;
    console.log('this =====================================>: ', this)
    // this global: Window. In an ES6 class, this is set to undefined instead of Window
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      }
    })
  }

  render() {
    return(
      <div>
        <Card text="First Card" someKey="Another key!" />
        <br />
        <Card text="Second Card" />
        <br />
        <article>Liked this many times: {this.state.count}</article>
        <button onClick={this.countIncrementer}>Like me!</button>
      </div>
      // Card({text: "This is a card!", someKey:"Another key!"})
    )
  }
}



ReactDOM.render(<App />, document.getElementById("app"))
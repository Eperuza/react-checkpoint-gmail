// jsx
// declarative
// TRANSPILE!!

const Thumbnail = function() {
  return (
    <div>Our Thumbnail!</div>
  )
}

const AuthorPic = function() {
  return (
    <div>I'm a picture</div>
  )
}

// Functional Component:
const Card = function() {
  return (
    <div>A trello card!!
      <Thumbnail />
      <AuthorPic />
    </div>
  )
}

ReactDOM.render(<Card />, document.getElementById("app"))
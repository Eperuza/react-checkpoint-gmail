function countdown(i) {
  console.log(i)
  countdown(i - 1)
}
countdown(5);
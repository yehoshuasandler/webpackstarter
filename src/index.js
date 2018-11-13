class Test {
  constructor (message) {
    console.log('Class Created')
    this.msg = message
  }
}

let msg = new Test('Yo!').msg
console.log(msg)

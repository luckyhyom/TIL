import { EventEmitter } from 'events'

const myEvent = new EventEmitter()
myEvent.on('step', (message) => console.log(`it is listening.. ${message}`))
myEvent.on('step', (message) => console.log(`it sounds like ${message}`))
myEvent.on('step', (message) => console.log(`it said ${message}`))

myEvent.emit('step', 'boom boom!')

class Person extends EventEmitter {
  listen(username) {
    this.on('listen', (message) =>
      console.log(`${username} is listening.. ${message}`)
    )
  }

  chat(message) {
    this.emit('listen', message)
  }
}

const people = new Person()
people.listen('Thor')
people.listen('Spider Man')

people.chat('"how you talk to someone?"')
people.chat('"make your own event name as chat room"')

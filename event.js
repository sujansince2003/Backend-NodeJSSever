const EventEmitter = require("events");
// it is in capital letter indicating this is class
// creating instance of the emitter
const emitter = new EventEmitter();
// emitter is an object

// register an event

emitter.on("messageLogged", function (eventArg) {
  console.log("listener is called", eventArg.id, eventArg.course);
});

// raise an event  ::: first emitter.on should be defined and then .emit  :: the order matters
emitter.emit("messageLogged", { id: 1, course: "csit" });

// this tells some events has happened ::  emitter.emit(nameofEvent);

// exercise
// register an event
emitter.on("login", ({ user }) => {
  console.log(user + " is logged in successfully");
});

// raise an event

emitter.emit("login", { user: "sujan" });

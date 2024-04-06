// const EventEmitter = require("events");
const hello = require("./logger");

// const emitter = new EventEmitter();

hello.emitter.on("messageLogged", function (eventArg) {
  console.log("listener is called", eventArg.id, eventArg.course);
});

hello.Hello();

// we have global object in node js
console.log("i am learning node");
global.console.log("i am learning node");
// both do the same job
/**
 * we can do same for others window objects like setTimeout(),setInterval()....
 * 
In browser we can follow same ::::  window.console.log() , window.setInterval() it also works for variables::
window.name="sujan"
console.log(name)
its same as  let name="sujan"
**but in node the variables we define are not added to the global obj
they are only scoped to this file only
this is due to node modular system
 */

// importing the module

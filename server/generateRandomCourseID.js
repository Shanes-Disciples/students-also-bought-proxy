module.exports = {
  getRandomIntInclusive
}

function getRandomIntInclusive(userContext, events, done) {
  const courseID = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
  userContext.vars.courseID = courseID;
  return done();
}

// By convention, a function called from a scenario with a function command is given 3 arguments: the virtual user’s context, an EventEmitter which can be used to communicate with Artillery, and a callback which needs to be called for the control to be returned to the scenario.
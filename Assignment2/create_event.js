const EventEmitter = require("events");

const student = new EventEmitter();

student.on("login", () => {
    console.log("Student logged successfully");
});

student.on("assignment", () => {
    console.log("Assignment submitted");
});

student.on("logout", () => {
    console.log("Student logged out");
});

student.on("exit", () => {
    console.log("Exiting application");
});

student.emit("login");
student.emit("assignment");
student.emit("logout");
student.emit("exit");


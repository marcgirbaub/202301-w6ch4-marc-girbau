const questions = [
  {
    type: "input",
    name: "port",
    message: "Which port do you want to use?",
    default: 4000,
    validate(value: string) {
      if (
        Number.isInteger(+value) &&
        Number(value) >= 0 &&
        Number(value) < 65536
      ) {
        return true;
      }

      return "Please enter a valid port number";
    },
  },
  {
    type: "confirm",
    name: "isClientAuthorized",
    message:
      "Do you want to authorize the client to create, delete and modify?",
  },
];

export default questions;

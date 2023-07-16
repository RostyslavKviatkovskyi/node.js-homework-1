import { program } from "commander";

import moviesServices from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await moviesServices.listContacts();
      return console.log(allContacts);

    case "get":
      const contact = await moviesServices.getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await moviesServices.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);

    case "remove":
      const removedContact = await moviesServices.removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();
// console.log(options);
invokeAction(options);

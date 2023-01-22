const ContactDetails = require("./Contact.js");

let person = new ContactDetails();

person.setFirstName("Shashank");
person.setLastName("Mishra");
person.setAddress("Dhoomanganj");
person.setCity("Prayagraj");
person.setState("Uttar Pradesh");
person.setZip("211011");
person.setPhoneNumber("8081176945");
person.setEmail("bshashank@gmail.com");

console.log(person.toString());
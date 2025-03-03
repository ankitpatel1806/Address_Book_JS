const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Ankit", "Patel", "Bhopal", "India", "In", "462022", "9876543210", "yugap1806@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());
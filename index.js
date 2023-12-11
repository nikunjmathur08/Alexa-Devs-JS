const readline = require('readline');

// Contact class definition
class Contact {
  constructor(name, address, contact) {
    this.name = name;
    this.address = address;
    this.contact = contact;
  }
}

// AddressBook class definition
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(name, address, contact) {
    const newContact = new Contact(name, address, contact);
    this.contacts.push(newContact);
    console.log('Contact added successfully!');
  }

  displayContacts() {
    console.log('\nAddress Book:');
    this.contacts.forEach((contact, index) => {
      console.log(`\nContact #${index + 1}`);
      console.log(`Name: ${contact.name}`);
      console.log(`Address: ${contact.address}`);
      console.log(`Contact Info: ${contact.contact}`);
    });
  }
}

// IIFE for managing the command line interface
(function () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const addressBook = new AddressBook();

  function addContact() {
    try {
      rl.question('Enter name: ', (name) => {
        rl.question('Enter address: ', (address) => {
          rl.question('Enter contact info: ', (contact) => {
            addressBook.addContact(name, address, contact);
            showOptions();
          });
        });
      });
    } catch (error) {
      console.error('Error adding contact:', error.message);
      showOptions();
    }
  }

  function displayContacts() {
    addressBook.displayContacts();
    showOptions();
  }

  function showOptions() {
    console.log('\nOptions:');
    console.log('1. Add a new contact');
    console.log('2. Display all contacts');
    console.log('3. Exit');

    rl.question('Choose an option (1-3): ', (option) => {
      switch (option) {
        case '1':
          addContact();
          break;
        case '2':
          displayContacts();
          break;
        case '3':
          console.log('Exiting address book. Goodbye!');
          rl.close();
          break;
        default:
          console.log('Invalid option. Please choose again.');
          showOptions();
      }
    });
  }

  // Start the address book
  console.log('Welcome to the Command Line Address Book!');
  showOptions();
})();

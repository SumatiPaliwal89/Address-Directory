const addressDirectory = {
  directory: [],

  AddressEntry: class {
    constructor(name, phonenumber) {
      this.name = name;
      this.phonenumber = phonenumber;
    }
  },

  NewEntry: function () {
    const name = document.getElementById('name').value;
    const phonenumber = document.getElementById('phonenumber').value;

    this.add(name, phonenumber);
    this.view();
    this.clearForm();
  },

  add: function (name, phonenumber) {
    try {
      if (typeof name !== 'string' || typeof phonenumber !== 'string') {
        throw new Error("Invalid Input");
      }

      const newEntry = new this.AddressEntry(name, phonenumber);
      this.directory.push({ ...newEntry });
            console.log(`Entry added: ${name}, ${phonenumber}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  },

  view: function () {
    const entries = document.getElementById('entries');
    entries.innerHTML = '';
    this.directory.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${entry.name}: ${entry.phonenumber}`;
      entries.appendChild(listItem);
    });
  }, 

  clearForm: function () {
    document.getElementById('name').value = '';
    document.getElementById('phonenumber').value = '';
  },
};

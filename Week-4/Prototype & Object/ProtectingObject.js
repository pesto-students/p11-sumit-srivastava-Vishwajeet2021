let person = {
    _name: "John",
    _age: 30,
    _email: "john@example.com",
    get name() {
      return this._name;
    },
    getAge() {
      return this._age;
    },
    setAge(age) {
      this._age = age;
    }
  };
  Object.defineProperty(person, "name", { writable: false });
  Object.defineProperty(person, "email", { writable: false });
  Object.defineProperty(person, "age", { 
    set: function(age) {
      this._age = age;
    }
  });
  
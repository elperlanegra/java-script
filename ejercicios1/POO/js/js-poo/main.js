var object = {
  field1: 10,
  field2: 'text',
  field3: function () {
    return this.field3;
  },
};
var paul = {
  name: 'paul',
  getName: function () {
    return this.name; //this es necesario!
  },
};

console.log(paul);

var y = 8454; // y pointing to address of the value 234

var z = y; 
     
// var z = 5411; // z pointing to a completely new address of the value 234
     
// Changing the value of y
y = 23;
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
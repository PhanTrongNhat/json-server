const faker = require("faker");
const fs = require("fs");
//set language to use vietnamese
faker.locale = "vi";

//random data

// console.log(faker.commerce.department());
// console.log(faker.commerce.department());
// console.log(faker.commerce.department());
// console.log(faker.commerce.department());
const setDataProductsList = (count) => {
    console.log(count);
  if (!count) {
    return [];
  }
  const arr = [];
  for (let i = 0; i < count; i++) {
    let temp = {
        id : faker.datatype.uuid(),
        name : faker.name.title(),
        cost : faker.commerce.price(),
        image : faker.image.business(),
        favourite : faker.datatype.boolean(),
        categori : faker.commerce.productMaterial(),
        description : faker.commerce.productDescription(),
    };
   
    arr.push(temp);
  
  }
  return arr;
};

(() => {
  const listProducts = setDataProductsList(10);
  const data = {
    products: listProducts,
  };
  // writte data to file db
  fs.writeFile("db.json",JSON.stringify(data), () => {
    console.log("set data success!");
  });
})();

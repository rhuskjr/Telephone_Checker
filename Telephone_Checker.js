function telephoneCheck(str) {
//create string without spaces
let newString = str.trim();
//console.log(newString);
let value = newString.match(/[^1-9-\(\)]/g)
//console.log(value);
if (!value){
  value = newString.match(/[^\(\)-]/g);
  if (value.length === 10){
    console.log(true);
    return true;
  } else if (value.length === 11 && value[0] === 1){ 
    console.log(true);
    return true 
  }
  console.log(false);
  return false;
}
console.log(false);
  return false;
}
  const node = document.createElement('div');
  node.textContent = "Hello World";
  document.getElementById("tele_number").appendChild(node);
//telephoneCheck("555-555-5555");
//telephoneCheck("(555)555-5555");
//telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
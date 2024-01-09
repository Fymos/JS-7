console.log('Array - 1');
let list1 = ['apple', 'mango', 'kiwi', 'banana', 'lemon']
for(var a = 0; a < list1.length; a++) {
  if(list1[a].length == 5) {
    console.log(list1[a]);
  }
}
console.log('');
console.log('Array - 2');
let list2 = ['apple', 'Mango', 'kiwI', 'banana', 'leMon']
for(var b = 0; b < list2.length; b++) {
  if(list2[b] != list2[b].toLowerCase()) {
    console.log(list2[b]);
  }
}
console.log('');
console.log('Array - 3');
let list3 = ['apple', 'Mango', 997 , 'kiwI', '-3', 'banana', 1000, 'leMon']
for(var c = 0; c < list3.length; c++) {
  if(isNaN(list3[c]) == false) {
    console.log(list3[c]);
  }
}
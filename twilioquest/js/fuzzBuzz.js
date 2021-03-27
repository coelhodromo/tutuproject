// this program wants to show "fuzz" if the number is divisible for 3 and buzz if divisible for 5. if the nunbre is divisible for 5 and 3 it shows fuzzBuzz

for (var i = 1; i<=100; i++){

if(i % 3 === 1 && i % 5 ===1){
    console.log('fuzzBuzz');
}
else if(i % 3 ===0){
    console.log('fuzz');
}
else if (i % 5 === 0){
    console.log('Buzz');
}
  else {
    console.log(i);
  }
  
}
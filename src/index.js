module.exports = function reverse(n) {
   n = n + '';
   let a = n.split('').reverse().join('');
   let b = parseInt(a, 10);
   console.log("b: ", b);
   return b;
}
//console.log(reverse(n));
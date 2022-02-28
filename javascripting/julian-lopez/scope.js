const a = 1; const b = 2; const c = 3;
//a=1 b=2 c=3
(function firstFunction() {
  const b = 5; const c = 6;
  //a=1 b=5 c=6
  (function secondFunction() {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    (function thirdFunction() {
      const a = 7; const c = 9;
      //a=7 b=8 c=9
      (function fourthFunction() {
        const a = 1; const c = 8;
        //a=1 b=8 c=8
      })()
    })()
  })()
})()

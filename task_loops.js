// 1
let numberOfUser = +prompt("Enter your number, please!", "");

  if (numberOfUser > 0) {
    alert("1");
  } else if (numberOfUser < 0) {
    alert("-1");
  } else  {
    alert("0");
  }

 //2
let i = 0;

 while ( i < 3) {
  console.log( "номер " + i + "!");
  i++;
}

//3
var a = +prompt("a?", "");

switch(a) {
  case 0: 
    alert(0);
    break;
  case 1: 
    alert(1);
    break;
  case 2:
  case 3:
   alert("2, 3");
   break;
	}

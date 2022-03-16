function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case "aeiou".includes(s.charAt(0)):
      letter = "A";
      break;
    case "bcdfg".includes(s.charAt(0)):
      letter = "B";
      break;
    case "hjklm".includes(s.charAt(0)):
      letter = "C";
      break;
    case "npqrstuvwxyz".includes(s.charAt(0)):
      letter = "D";
      break;
  }
  return letter;
}

// ref: https://medium.com/@foyshalrahman27/hackerrank-com-10-days-of-javascript-solutions-579ef4c0956b

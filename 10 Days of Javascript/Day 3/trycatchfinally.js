function reverseString(s) {
  try {
    const result = s.split("");
    console.log(result.reverse().join(""));
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

function regexVar() {
  let re = new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.|)[a-z|A-Z]+$/);
  return re;
}

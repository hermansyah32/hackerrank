function getCount(objects) {
  let counter = 0;
  objects.forEach((object) => {
    if (object.x === object.y) counter += 1;
  });
  return counter;
}

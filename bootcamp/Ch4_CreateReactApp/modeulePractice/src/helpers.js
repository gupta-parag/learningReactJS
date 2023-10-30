const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const remove = (item, arr) => {
  const position = arr.indexOf(item);
  if (position !== -1) {
    return arr.splice(position, 1);
  } else {
    return undefined;
  }
};

export { choice, remove };

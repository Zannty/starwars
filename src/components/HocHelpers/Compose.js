export const Compose = (...func) => component => {
  const arr = func.reverse();
  let result = component;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i](result);
  }
  return result;
};

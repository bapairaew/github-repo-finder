const hash = {};

export const cancel = key => {
  if (hash[key]) {
    clearTimeout(hash[key].timeout);
  }
};

export default (key, callback, wait = 500) => {
  cancel(key);
  hash[key] = { callback };
  hash[key].timeout = setTimeout(() => hash[key].callback(), wait);
};

stringToHash = (str) => {
  let hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

validateAmount = (amount) => {
  if (Number.isNaN(Number.parseFloat(amount))) {
    return false;
  }

  return true;
}

module.exports = {
  stringToHash,
  validateAmount,
};

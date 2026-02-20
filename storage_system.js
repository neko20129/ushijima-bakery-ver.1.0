function save() {
  localstorage.setItem('moneyKey',money);
  localstorage.setItem('levelKey',level);
  localstorage.setItem('soldKey',sold);
  localstorage.setItem('levelUpKey',levelUp);
}

function load() {
  money = localstorage.getItem('moneyKey');
  level = localstorage.getItem('levelKey');
  sold = localstorage.getItem('soldKey');
  levelUp = localstorage.getItem('levelUpKey');
}

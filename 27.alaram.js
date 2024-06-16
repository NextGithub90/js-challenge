function setAlarm(employed, vacation) {
  if (employed) {
    if (vacation) {
      return false;
    } else {
      return true;
    }
  } else {
    if (vacation) {
      return false;
    } else {
      return false;
    }
  }
}
console.log(setAlarm(false, false));

/* employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false */

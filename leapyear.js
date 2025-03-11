function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is leap year");
  } else {
    console.log(year +"is not leap Year");
  }
}
const year = 2027;
leapYear(year);

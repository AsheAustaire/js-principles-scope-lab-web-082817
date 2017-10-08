var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

var bestCustomer;
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Jernerthern'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Werl'
}

let favoriteCustomer = 'floop'

function attemptTwoFavoriteCustomers() {
let favoriteCustomer = 'cloop'
let favoriteCustomer = 'toop'
}

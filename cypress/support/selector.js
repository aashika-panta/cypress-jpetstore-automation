export const selector = {
  username_field: '[name="username"]',
  password_field: '[name="password"]',
  repeatpassword: '[name="repeatedPassword"]',
  firstname: '[name="account.firstName"]',
  lastname: '[name="account.lastName"]',
  email: '[name="account.email"]',
  phone: '[name="account.phone"]',
  address1: '[name="account.address1"]',
  address2: '[name="account.address2"]',
  city: '[name="account.city"]',
  state: '[name="account.state"]',
  zip: '[name="account.zip"]',
  country: '[name="account.country"]',
  languages: '[name="account.languagePreference"]',
  category: '[name="account.favouriteCategoryId"]',
  saveinformation: '[name="newAccount"]',
};

export const loginSelector = {
  enter_store: "//a[normalize-space()='Enter the Store']",
  sign_in: "//a[normalize-space()='Sign In']",
  username_field: '[name="username"]',
  password_field: '[name="password"]',
  login_button: '[name="signon"]',
};

export const cartSelector = {
  fish: "//img[@src='../images/sm_fish.gif']",
  fishProduct: "//a[normalize-space()='FI-SW-01']",
  FishaddToCart: "//tbody/tr[2]/td[5]",

  returnToMainMenu: "//a[normalize-space()='Return to Main Menu']",

  reptiles: "//img[@src='../images/sm_reptiles.gif']",
  reptileProduct: "//a[normalize-space()='RP-SN-01']",
  reptileAddToCart: "//tbody/tr[2]/td[5]/a[1]",

  cart: "//img[@name='img_cart']",

  removeProduct: "//tbody/tr[2]/td[8]/a[1]",

  quantity: '[name ="EST-1"]',
  updateCart: '[name ="updateCartQuantities"]',
};
export const checkout = {
  checkoutprocess: "//a[normalize-space()='Proceed to Checkout']",
  cardtype: '[name ="order.cardType"]',
  cardnumber: '[name ="order.creditCard"]',
  expirydate: '[name="order.expiryDate"]',
  first_name: '[name ="order.billToFirstName"]',
  last_name: '[name ="order.billToLastName"]',
  Address1: '[name ="order.billAddress1"]',
  Address2: '[name ="order.billAddress2"]',
  city: '[name ="order.billCity"]',
  state: '[name ="order.billState"]',
  Zip: '[name ="order.billZip"]',
  Country: '[name ="order.billCountry"]',
  continue: "//input[@value='Continue']",
  confirm: "//a[normalize-space()='Confirm']",
};

export const searchs = {
  search: "[name='keyword']",
  searchproduct: "[name='searchProducts']",
};
export const account = {
  myaccount: "//a[normalize-space()='My Account']",
  myaccount: "//a[normalize-space()='My Account']",
  firstName: '[name="account.firstName"]',
  lastName: '[name="account.lastName"]',
  email: '[name="account.email"]',
  address1: '[name="account.address1"]',
  Edit: '[name="editAccount"]',
};
export const Fish = {
  fish: "//img[@src='../images/sm_fish.gif']",
  fishProduct: "//a[normalize-space()='FI-SW-01']",
  fishid: "//a[normalize-space()='EST-1']",
};

export const Dog = {
  dog: "//img[@src='../images/sm_dogs.gif']",
  dogProduct: "//a[normalize-space()='K9-BD-01']",
  dogid: "//a[normalize-space()='EST-6']",
};

export const Bird = {
  bird: "//img[@src='../images/sm_birds.gif']",
  birdProduct: "//a[normalize-space()='AV-CB-01']",
  birdid: "//a[normalize-space()='EST-18']",
};

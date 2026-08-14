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

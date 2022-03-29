drop database if exists cruddyAmazon;



CREATE DATABASE cruddyAmazon;

USE cruddyAmazon;

CREATE TABLE userInfo (
  sessionID VARCHAR(50) NULL,
  currentPage VARCHAR(10) Null,
  firstName VARCHAR(15) NULL,
  lastName VARCHAR(15) NULL,
  email VARCHAR(15) NULL,
  password VARCHAR(15) NULL,
  addressLine1 VARCHAR(15) NULL,
  addressLine2 VARCHAR(15) NULL,
  city VARCHAR(15) NULL,
  state VARCHAR(15) NULL,
  zip VARCHAR(15) NULL,
  phone VARCHAR(15) NULL,
  cardNumber VARCHAR(15) NULL,
  expiryDate VARCHAR(15) NULL,
  cvv VARCHAR(15) NULL,
  billingZip VARCHAR(15) NULL
);


-- //sessionID
-- //firstname, lastname, email, password
-- //address line1, address line2, city, state, zip, phone-
-- //card number, expiry date, cvv, billing zip
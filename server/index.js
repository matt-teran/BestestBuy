require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
var Promise = require('bluebird');

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json()); // this is the parser
app.use(express.urlencoded());

/****
  req.session_id - the session ID
  req.body.currentPage - the current page that sent the request
 *
  info from page 0
 req.body[0] - firstname
 req.body[1] - lastname
 req.body[2] - email
 req.body[3] - password

 */
// info from page 1
// console.log('Address line 1', e.target[0].value);
// console.log('Address line 2', e.target[1].value);
// console.log('city', e.target[2].value);
// console.log('state', e.target[3].value);
// console.log('zip', e.target[4].value);
// console.log('phone number', e.target[5].value);
// console.log('current page', this.state.page);

//info from page 2
// console.log('Card number', e.target[0].value);
// console.log('expiry date', e.target[1].value);
// console.log('cvv', e.target[2].value);
// console.log('zipcode', e.target[3].value);
// console.log('current page', this.state.page);


app.post('/cart', (req, res) => {
  switch (req.body.currentPage) {
    case 0:// case = 0 when the client submits info from page 0// sign up
      let query = `INSERT INTO userInfo (sessionID, currentPage, firstName, email, password) VALUES
      ('${req.session_id}', '${req.body.currentPage + 1}', '${req.body[1]}', '${req.body[2]}', '${req.body[3]}')`;

      db.query(query, (err, results) => {
        if (err) {
          res.send({ page: 100 });
        } else {
          res.send({ page: 1 })
        }
      })
      break;

    case 1: // case 1 when the client submits info from page 1: shipping info
      let query2 = `UPDATE userInfo SET addressLine1 = '${req.body[0]}', addressLine2 = '${req.body[1]}',
      city='${req.body[2]}', state='${req.body[3]}', zip='${req.body[4]}', phone='${req.body[5]}', currentPage='${req.body.currentPage + 1}' WHERE sessionID = '${req.session_id}'`;

      db.query(query2, (err, results) => {
        if (err) {
          res.send({ page: 100 });
        } else {
          res.send({ page: 2 })
        }
      })
      break;

    case 2: // case 2 when the client submits info from page 2: PaymentInfo
      let query3 = `UPDATE userInfo SET cardNumber = '${req.body[0]}', expiryDate = '${req.body[1]}',
        cvv='${req.body[2]}', billingZip='${req.body[3]}', currentPage='${req.body.currentPage + 1}' WHERE sessionID = '${req.session_id}'`;

      db.query(query3, (err, results) => {
        if (err) {
          res.send({ page: 100 });
        } else {
          res.send({ page: 3 })
        }
      })
      break;

    case 4: // when the client sends email and password from page 4: login page
      let query4 = `Select password from userInfo where email like '${req.body[0]}'`;

      new Promise((resolve, reject) => {
        db.query(query4, (err, results) => { //pulls the password out of the database by matching email from db
          if (err) {
            res.send({ page: 100 });
            reject(err);
          } else { // sends on the password in the resolve
            res.send({ page: 4 }) // remove this after testing
            let password = results[0].password;
            resolve(password);
          }
        })
      })
        .then((password) => { //checks to see if the passwords match
          console.log('this one@@@@', req.body[0]);
          if (password === req.body[1]) {
            console.log('passwords match!');

            new Promise ((resolve, reject)=>{ // gets page
              query4 = `Select currentPage from userInfo where email like '${req.body[0]}'`;

                db.query(query4, (err, results) => { //uses email to find the current page number
                  if (err) {
                    res.send({ page: 100 });
                    reject(err);
                  } else { //@@@@@@ START HERE. WE NEED TO SEND A PAGE NUMBER BACK. REMEMEBR TO REMOVE THE PREVIOUS RES.SENDS@@@@@@@@@@@
                    console.log(results);
                    console.log('pageNumber FIX THIS: ', results[0].currentPage);
                    resolve(results[0].currentPage);
                  }
                })
            }).then(()=>{ // @@@@@@@@@@@@@@@@ 2ND TO DO. SET THE SESSION ID IN THE TABLE EQUAL TO THE ONE SENT
              // let id=
              query4 = `UPDATE userInfo SET sessionID = '${req.session_id}' WHERE email = '${req.session_id}'`; // NEED TO USE HOLDER VARIABLE

              db.query(query4, (err, results) => { //pulls the password out of the database by matching email
                if (err) {
                  res.send({ page: 100 });
                } else {
                  console.log(results);
                  console.log('pageNumber:', results[0]);
                  // res.send({ page: 100 });
                }
              })

            }) //CONTINUE HERE AND UPDATE THE SESSION ID IN THE TABLE!


          } else {// wrong password
            // res.send({ page: 4 });
            console.log('doesnt match?')
          }
        }
        )
      // .then (()=>{ //grabs the currentpage
      //   query4 = `Select currentPage from userInfo where email like '${req.body[0]}'`;

      //   db.query(query4, (err, results) => { //pulls the password out of the database by matching emmail
      //     if (err) {
      //       res.send({ page: 100 });
      //       reject(err);
      //     } else {
      //       console.log(results);
      //       resolve(results[0]);
      //     }
      //   })
      // })
      // .then(({currentPage})=> {
      //   console.log('current Page', currentPage);
      // })



      break;

  }

})

//this should check the cookie sent from the page when they first visit to see if the user needs to be sent to a different page
app.get('/checkSession', (req, res) => {
  let query = `Select currentPage from userInfo where sessionID like '${req.session_id}'`;
  db.query(query, (err, result) => {
    if (err) {
      res.send({ page: 0 });
    } else {
      if (result.length) { //returns the page where the user left off if there is a session
        res.send({ page: result[0].currentPage });
      }
    }
  });
})

app.listen(3000);
console.log(`Listening at http://localhost:3000`);

var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require("console.table");


var connection = mysql.createConnection({
  host: "localhost",

  // Port
  port: 3306,

  // Username
  user: "root",

  // SQL DB & PW
  password: "CodyParkey1!",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();

});

//Display all products
  function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
      if (err) throw err;
      var items = cTable.getTable(res);
      console.log("\n" + "Amazon options: " + "\n" + items);
      connection.end();
      customerstore();
    })
  }


//Customer input

function customerstore() {
  inquirer
      .prompt({
        type: "input",
        message: "What is the ID of the product they would like to buy?",
        name: "idI"
      })
      .then(function (inqRes) {
          var itemQuery = "SELECT product_title, dept_title, price, stock_quantity FROM bamazon.products WHERE ?";
          connection.query(itemQuery, { id: inqRes.idI}, function (err, res) {
              if (err) throw err;
              if (res[0].stock_quantity > 0) {
                  custQuant(inqRes.idI, res[0].stock_quantity, res[0].price);
              } else {
                  console.log("Sorry, that item is out of stock.");
                  customerstor();
              }
          });
      });
}


function custQuant(id, stock_quantity, price) {
  inquirer
      .prompt({
        type: "Cinput",
        message: "How many units of this would you like to buy?",
        name: "amount"
      })
      .then(function (inqRes, res) {
          if (inqRes.Cinput <= stock_quantity) {
              updateDB(id, inqRes.Cinput, price);
          } else {
              console.log("Insufficient quantity, there is only: " + stock_quantity + " in stock. Please update your quantity");
              itemToBuy();
          }
      });
}

//

// function updateBamazon(id, stock_quantity, price) {
//   var updateQuery = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE idI = ?";
//   connection.query(updateQuery, [quantity, id], function (err, res) {
//       if (err) throw err;
//       console.log("Sold! Your total is: $" + (price * stock_quantity));
//   })
//   connection.end();



//pseudoCode
//Gather input of what customer wants

//Check inventory and send alert sayuing it is out of stock or place customer input and deduct remaining quantity in database
    //prevent order going through if theres not enough stock
    //place customers order if everything is fine

//re-run inquirer to see if customer wants something else
    //restart loop or end connection

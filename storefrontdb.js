var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Port
  port: 3306,

  // Username
  user: "root",

  // Your password
  password: "CodyParkey1!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

afterConnection();

// Create a "Prompt" with a series of questions.
inquirer
   .prompt([
       // Here we create a basic text prompt.
       {
           type: "input",
           message: "What is your name?",
           name: "title"
       },
       // Here we create a basic password-protected text prompt.
       {
           type: "password",
           message: "Set your password",
           name: "passW"
       },
       // Here we give the user a list actions to choose from
       {
           type: "list",
           message: "What would you like to do?",
           choices: ["Post an item", "Bid on an item"],
           name: "service_title"
       }
   ])
   .then(function (inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.service_title == "Post an item") {
        console.log("\nWelcome " + inquirerResponse.title);
        console.log("Lets " + inquirerResponse.service_title + "!\n");
        // postItem();
    } else if (inquirerResponse.service_title == "Bid on an item") {
        console.log("\nWelcome " + inquirerResponse.name);
        console.log("Lets " + great_bay_db.service_title + "!\n");
        listItems();
    } else {
        console.log("\nThat's okay " + inquirerResponse.name + ", come again when you are ready!\n");
    }
  });
  
  
  function listItems() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM service_title", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  
});
function afterConnection () {
  connection.query("SELECT * FROM products", function(err, res){
    if(err) throw err;
    console.log(res);
    connection.end();
  })
}


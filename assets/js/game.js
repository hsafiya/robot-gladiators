var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    if (playerHealth === 0) {
        console.log("This will not run.");
      } 
      else {
        console.log("This will run instead.");
      }
  };
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //allert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

      enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.
 console.log  (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
  

  // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  // check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
};


window.alert("This is an alert! JavaScript is running");
//create function//
function fight() {
    window.alert("The fight has begun!");
}
//execute function//
fight();

const userName = prompt("Please enter your name:");
if (userName) {
    alert(`Hello, ${userName}! Welcome to our website.`);
    document.getElementById("welcome").textContent = `Welcome, ${userName}!`;
    
    console.log(userName.indexOf("y"));
    document.getElementById("div").textContent = `Welcome, ${userName.indexOf("y")}`;
} else {
    alert("You didn't enter a name. Please refresh the page and try again.");
}
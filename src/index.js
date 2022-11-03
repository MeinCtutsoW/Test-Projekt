import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Login</h1>
<div class"form">
  <form>
  <label for = "username" id = "username">Username:</label><br>
  <input type = "text" id = "username"></input><br><br>
  <label for = "password">Password:</label><br>
  <input type = "password"></input><br><br>
  <input type = "submit", id="submit" value="Submit"></input>
  </form>
</div>
`;

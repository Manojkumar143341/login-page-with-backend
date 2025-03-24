<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .login-container {
            background: white;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        input {
            display: block;
            width: 100%;
            margin: 10px 0;
            padding: 8px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: darkblue;
        }
    </style>
</head>
<body>

    <div class="login-container">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button onclick="login()">Login</button>
        <p id="message"></p>
    </div>

    <script>
        function login() {
            // Hardcoded credentials
            const correctUsername = "admin";
            const correctPassword = "password123";

            // Get user input
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const message = document.getElementById("message");

            // Validate login
            if (username === correctUsername && password === correctPassword) {
                message.style.color = "green";
                message.innerText = "Login Successful!";
            } else {
                message.style.color = "red";
                message.innerText = "Invalid Username or Password!";
            }
        }
    </script>

</body>
</html>

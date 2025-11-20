## JWT Authentication – (Week 11) <br>
Setup <br>
```bash
npm init -y
npm install express jsonwebtoken
```

Run Server
```bash
node server.js
```

Generate JWT (Login)
```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d "{\"user\":\"a\",\"pass\":\"1\"}"
```

This returns:
{"token":"<YOUR_JWT_TOKEN>"}

Access Protected Endpoint
```bash
curl http://localhost:3000/protected -H "token: <PASTE_TOKEN_HERE>"
```

Expected: 
Hello a

## POSTMAN - (Week 10)

Open terminal in VS Code and run:
```bash
node app.js
```

Test Each Route: <br><br>
📌 GET all students <br>
Method: GET<br>
URL: http://localhost:3000/students <br>

Click Send

You should get:
[
  { "id": 1, "name": "John", "address": "Street 1" }
]<br><br>
📌 GET student by ID<br>
Method: GET<br>
URL: http://localhost:3000/students/1<br><br>

📌 POST → Add a new student<br>
Method: POST<br>
URL: http://localhost:3000/students<br>

Click Body → Select raw → Choose JSON<br>
Enter:<br>
{
  "name": "Akshay",
  "address": "Bangalore"
}
Click Send<br>

You should get:<br>
{
  "id": 2,
  "name": "Akshay",
  "address": "Bangalore"
}<br><br>

📌 PUT → Update a student<br>
Method: PUT<br>
URL: http://localhost:3000/students/1<br>

Body → raw → JSON:<br>
{
  "name": "John Updated",
  "address": "New Street"
}<br><br>

📌 DELETE → Remove a student<br>
Method: DELETE<br>
URL: http://localhost:3000/students/1<br>

JWT Authentication – (Week 11)
Setup
npm init -y
npm install express jsonwebtoken

Run Server
node server.js

Generate JWT (Login)
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d "{\"user\":\"a\",\"pass\":\"1\"}"


This returns:
{"token":"<YOUR_JWT_TOKEN>"}

Access Protected Endpoint
curl http://localhost:3000/protected -H "token: <PASTE_TOKEN_HERE>"


Expected:
Hello a

<------------------------------------------------------------------------>
POSTMAN - (Week 10)

Open terminal in VS Code and run:
node app.js

Test Each Route:
📌 GET all students
Method: GET
URL: http://localhost:3000/students

Click Send

You should get:
[
  { "id": 1, "name": "John", "address": "Street 1" }
]
📌 GET student by ID
Method: GET
URL: http://localhost:3000/students/1

📌 POST → Add a new student
Method: POST
URL: http://localhost:3000/students

Click Body → Select raw → Choose JSON
Enter:
{
  "name": "Akshay",
  "address": "Bangalore"
}
Click Send

You should get:
{
  "id": 2,
  "name": "Akshay",
  "address": "Bangalore"
}

📌 PUT → Update a student
Method: PUT
URL: http://localhost:3000/students/1

Body → raw → JSON:
{
  "name": "John Updated",
  "address": "New Street"
}

📌 DELETE → Remove a student
Method: DELETE
URL: http://localhost:3000/students/1
<------------------------------------------------------------------------>

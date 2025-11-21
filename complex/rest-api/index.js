const express = require('express');
const app = express();
app.use(express.json());

let students = [{ id: 1, name: "John", address: "Street 1" }];
const get = id => students.find(s => s.id == id);
const idx = id => students.findIndex(s => s.id == id);

app.get('/students', (_, r) => r.json(students));

app.get('/students/:id', (q, r) =>
  r[get(q.params.id) ? "json" : "sendStatus"](get(q.params.id) || 404)
);

app.post('/students', (q, r) =>
  (!q.body.name || !q.body.address)
    ? r.sendStatus(400)
    : r.status(201).json(students[students.push({ id: students.length + 1, ...q.body }) - 1])
);

app.put('/students/:id', (q, r) =>
  idx(q.params.id) < 0
    ? r.sendStatus(404)
    : r.json(students[idx(q.params.id)] = { id: +q.params.id, ...q.body })
);

app.delete('/students/:id', (q, r) =>
  idx(q.params.id) < 0
    ? r.sendStatus(404)
    : r.json(students.splice(idx(q.params.id), 1)[0])
);

app.listen(3000, () => console.log("Running"));

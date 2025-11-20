const express = require('express');
const app = express();
app.use(express.json());

let students = [{ id: 1, name: "John", address: "Street 1" }];

const get = id => students.find(s => s.id == id);
const idx = id => students.findIndex(s => s.id == id);

app.get('/students', (_, res) => res.json(students));

app.get('/students/:id', (req, res) =>
  get(req.params.id) ? res.json(get(req.params.id)) : res.sendStatus(404)
);

app.post('/students', (req, res) => {
  if (!req.body.name || !req.body.address) return res.sendStatus(400);
  const s = { id: students.length + 1, ...req.body };
  students.push(s);
  res.status(201).json(s);
});

app.put('/students/:id', (req, res) =>
  idx(req.params.id) < 0
    ? res.sendStatus(404)
    : (students[idx(req.params.id)] = { id: Number(req.params.id), ...req.body },
       res.json(students[idx(req.params.id)]))
);

app.delete('/students/:id', (req, res) =>
  idx(req.params.id) < 0
    ? res.sendStatus(404)
    : res.json(students.splice(idx(req.params.id), 1)[0])
);

app.listen(3000, () => console.log("Running"));


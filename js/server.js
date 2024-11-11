const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/add-water', (req, res) => {
    const { quantity } = req.body;

    // Aquí debes agregar la lógica para actualizar la base de datos con la cantidad de agua.
    // Por ejemplo, podrías usar un ORM como Sequelize o hacer una consulta SQL directamente.

    // Simulación de éxito:
    const success = true;

    if (success) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
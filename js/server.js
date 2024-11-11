const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/add-water', (req, res) => {
    try {
        const { quantity } = req.body;

        // Aquí debes agregar la lógica para actualizar la base de datos con la cantidad de agua.
        // Por ejemplo, podrías usar un ORM como Sequelize o hacer una consulta SQL directamente.

        // Simulación de éxito:
        const success = true;

        if (success) {
            res.json({ success: true });
        } else {
            res.status(500).json({ success: false, message: 'Failed to add water quantity.' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'An internal server error occurred.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    const json = [
        {id: 1, name: 'kkd1'},
        {id: 2, name: 'kkd2'},
        {id: 3, name: 'kkd3'}
    ];
    res.json(json);
});

app.listen(PORT, () => console.log(`SERVER IS UP ON PORT ${PORT}`));
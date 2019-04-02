import { MovieService } from '../service/MovieService'
import express = require('express');

const router = express.Router();

router.get('/movies', async (req, res) => {
    
    res.send(await MovieService.findAll());
});

router.get('/movies/:id', async (req, res) => {
    let id = req.param('id');
    res.send(await MovieService.findById(id));
});

router.post('/movies', async (req, res) => {
    res.sendStatus(201);
    res.send(await MovieService.insertOne(req.body));
});

router.put('/movies/:id', async (req, res) => {
    req.body._id = req.param('id');
    res.send(await MovieService.updateOne(req.body));
});

router.delete('/movies/:id', async (req, res) => {
    let id = req.param('id');
    res.sendStatus(204);
    res.send(await MovieService.deleteOne(id));
});

module.exports = router;

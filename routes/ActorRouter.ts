import { ActorService } from '../service/ActorService'
import express = require('express');

const router = express.Router();

router.get('/actors', async (req, res) => {
    res.send(await ActorService.findAll());
});

router.get('/actors/:id', async (req, res) => {
    let id = req.param('id');
    res.send(await ActorService.findById(id));
});

router.post('/actors', async (req, res) => {
    res.sendStatus(201);
    res.send(await ActorService.insertOne(req.body));
});

router.put('/actors/:id', async (req, res) => {
    req.body._id = req.param('id');
    res.send(await ActorService.updateOne(req.body));
});

router.delete('/actors/:id', async (req, res) => {
    let id = req.param('id');
    res.sendStatus(201);
    res.send(await ActorService.deleteOne(id));
});

module.exports = router;
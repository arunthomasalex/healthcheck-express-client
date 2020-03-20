const express = require('express');

const router =  express.Router();
const starttime = new Date().getTime();

exports.getRouter = () => {
    const health = (req, res) => {
        res.send({
            uptime: process.uptime(),
            startTime: starttime,
            status: "Healthy"
        });
    };
    
    const details = (req, res) => {
        res.send({
            memoryUsage: process.memoryUsage()
        });
    };
    
    router.get('/health', health);
    router.get('/details', details);

    return router;
}
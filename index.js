const express = require('express');

const health = (req, res) => {
    res.send({
        uptime: process.uptime(),
        startTime: healthCheckClient.starttime,
        status: "Healthy"
    });
};

const details = (req, res) => {
    res.send({
        memoryUsage: process.memoryUsage()
    });
};

const router =  express.Router();
router.get('/health', health);
router.get('/details', details);


class HealthCheckClient {
    constructor(){
        this.starttime = new Date().getTime();
    }

    setUpHealth(app) {   
        app.use('/actuator', router);
    }
}

const healthCheckClient = new HealthCheckClient()

module.exports = healthCheckClient;

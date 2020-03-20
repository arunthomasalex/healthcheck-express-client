const { getRouter } = require('./routes'); 

class HealthCheckClient {
    constructor(){
        this.starttime = new Date().getTime();
        Object.freeze(this.starttime);
    }

    addHealthCheck(app) {   
        app.use('/actuator', getRouter());
    }
}

const healthCheckClient = new HealthCheckClient()

module.exports = healthCheckClient;

const http = require('http');
const chartTemplate = require('./chartTemplate')

const startServer = (chart, options = {}, callback) => {
    const hostname = options.hostname || '127.0.0.1'
    const port = options.port || '8001'
    
    try {
        http.createServer((req, res) => {
            res.end(chartTemplate(chart));
        }).listen(port, hostname, () => {
            console.log(`AutoPlot is running on ${hostname}:${port}`)
            if(callback) {
                callback(null)
            }
        })
    } catch(error) {
        console.error(error)
        if(callback) {
            callback(error)
        }
    } 
};

module.exports = startServer
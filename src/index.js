const http = require('http');
const chartTemplate = require('./chartTemplate')

const startServer = (chart, options = {}) => {
    const hostname = '127.0.0.1'
    const port = options.port || '8001'
    
    try {
        http.createServer((req, res) => {
            res.end(chartTemplate(chart));
        }).listen(port, hostname, () => {
            if(options.callback) {
                callback(null)
            } else {
                console.log(`QuickChart is running on ${hostname}:${port}`)
            }
        })
    } catch(error) {
        if(options.callback) {
            callback(error)
        } else {
            console.error(error)
        }
    } 
};

module.exports = startServer
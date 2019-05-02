# QuickChart

Ever wanted to visualize a dataset in a chart in seconds in a node app? Search no further!

QuickChart quickly opens a minimalistic node server and displays a ChartJs graph on your fav' browser using [autoChart](https://www.npmjs.com/package/autochart).

## Installation

```bash
npm i quickchart
```

## Usage

`quickchart(chart, [options])`

```javascript
const quickchart = require('quickchart')

quickchart({
    // chartJs object
}, {
    // options
    port: 8001, // Port to open - default value = 8001
    callback: (error) => {} // optional callback when server is up or fails - default is console.log / console.error
})
```

## Example

```javascript
const quickchart = require('quickchart')

quickchart({
    type: 'bar',
    data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
            label: 'Data',
            backgroundColor: 'rgb(255, 0, 0)',
            data: [42, 69, 10]
        }]
    },
})
```

```bash
QuickChart is running on 127.0.0.1:8001
```

## License

MIT © Ivan Sedletzki - Please use and share at will

Special thanks to Dinesh Pandiyan for npm-module-boilerplate

let child_process = require('child_process');

module.exports = {
    start: (cb) => {
        child_process.exec('which mb', (err, stdout, stderr) => {
            cb(err);
        });
    },
    version: (cb) => {
        cb(null, '1.13.0');
    }
};

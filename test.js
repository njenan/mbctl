let assert = require('chai').assert;
let child_process = require('child_process');

let mbctl = require('./mbctl');

describe('mbctl', () => {
    let path;

    beforeEach(() => {
        path = process.env.PATH;
    });

    afterEach(() => {
        process.env['PATH'] = path;
    });

    it('should fail if mb is not on path', (done) => {
        process.env['PATH'] = '';

        mbctl.start((err) => {
            assert.isOk(err);
            done();
        });
    });

    it('should not fail if mb is available on path', (done) => {
        mbctl.start((err) => {
            assert.isNotOk(err);
            done();
        });
    });
    
    it('should display mountebank version', (done) => {
        mbctl.version((err, version) => {
            assert.equal('1.13.0', version);
            done();
        });
    });
    
    xit('should let mountebank start multiple instances', () => {});

    xit('should allow imposters to be listed', () => {});
    
    xit('should allow proxy imposters to be posted', () => {});
    
    xit('should allow mock verification logs to be printed', () => {});
    
});

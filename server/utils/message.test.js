const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'testFrom';
        var text = 'testText';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'testFrom';
        var lat = 1;
        var lon = 2;
        var url = "https://www.google.com/maps?q=1,2";
        var message = generateLocationMessage(from, lat, lon);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});
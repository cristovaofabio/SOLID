import { Messaging } from './messaging';

describe('MESSAGING', () => {
    afterEach(() => jest.clearAllMocks());

    it('should return undefined', () => {
        const sut = new Messaging();
        const message = 'Hello!';

        expect(sut.sendMessage(message)).toBeUndefined;
    });

    it('should call console.log once', () => {
        const sut = new Messaging();
        const message = 'Hello!';
        const consoleSpy = jest.spyOn(console, 'log');

        expect(sut.sendMessage(message)).toBeUndefined;
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    it('should call console.log once "Hello!"', () => {
        const sut = new Messaging();
        const message = 'Hello!';
        const consoleSpy = jest.spyOn(console, 'log');

        expect(sut.sendMessage(message)).toBeUndefined;
        expect(consoleSpy).toHaveBeenCalledWith('Hello!');
    });
});

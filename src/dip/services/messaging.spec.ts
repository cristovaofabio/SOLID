import { Messaging } from './messaging';

const createSut = () => {
    return new Messaging();
}

describe('MESSAGING', () => {
    afterEach(() => jest.clearAllMocks());

    it('should return undefined', () => {
        const sut = createSut();
        const message = 'Hello!';

        expect(sut.sendMessage(message)).toBeUndefined;
    });

    it('should call console.log once', () => {
        const sut = createSut();
        const message = 'Hello!';
        const consoleSpy = jest.spyOn(console, 'log');

        expect(sut.sendMessage(message)).toBeUndefined;
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    it('should call console.log once "Hello!"', () => {
        const sut = createSut();
        const message = 'Hello!';
        const consoleSpy = jest.spyOn(console, 'log');

        expect(sut.sendMessage(message)).toBeUndefined;
        expect(consoleSpy).toHaveBeenCalledWith('Hello!');
    });
});

import { sayHello } from '../build/hello-world.js';

// hello-world.test.ts

describe('sayHello', () => {
    it('should return a greeting for the given name', () => {
        const sut = sayHello;
        const expected = 'Hello, World!';

        const actual = sut('World');

        expect(actual).toBe(expected);
    });

    it('should handle an empty string as name', () => {
        expect(sayHello('')).toBe('Hello, !');
    });

    it('should handle a name with special characters', () => {
        expect(sayHello('@User')).toBe('Hello, @User!');
    });

    it('should handle a name with spaces', () => {
        expect(sayHello('John Doe')).toBe('Hello, John Doe!');
    });
});
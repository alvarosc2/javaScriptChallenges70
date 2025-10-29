import { findMissingLetter_v1 } from '../find-missing-letter';

describe('findMissingLetter_v1', () => {
    it('should find the missing letter in a sequence of lowercase letters', () => {
        expect(findMissingLetter_v1(['a', 'b', 'd'])).toBe('c');
    });

    it('should find the missing letter in a sequence of uppercase letters', () => {
        expect(findMissingLetter_v1(['O', 'Q', 'R'])).toBe('P');
    });

    it('should return an empty string if no letter is missing', () => {
        expect(findMissingLetter_v1(['a', 'b', 'c'])).toBe('');
    });

    it('should handle a sequence with only one letter', () => {
        expect(findMissingLetter_v1(['z'])).toBe('');
    });

    it('should handle a sequence with non-consecutive missing letters', () => {
        expect(findMissingLetter_v1(['a', 'c', 'e'])).toBe('b');
    });
});
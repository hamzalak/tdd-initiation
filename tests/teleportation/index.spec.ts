import { checkPostion, computeFinalPosition } from '../../src/teleportation';

describe('Check the avatar position and compare it with the portal input', () => {
    it('should return nothing if postion hasn t the same coordianate as portalA', () => {
        expect(checkPostion([1, 1], [1, 2], [1, 2])).toEqual(undefined);
    });
    it('should change position if postion has the same coordianate as portalA', () => {
        expect(checkPostion([1, 1], [1, 1], [1, 2])).toEqual([1, 2]);
    });
});

describe('return the postion without  portal position', () => {
    it("should return the exact position given the initial position'[0,0]'   moves DDR", () => {
        expect(computeFinalPosition(5, 5, [0, 0], [], [], 'DDR')).toEqual([1, 2]);
    });
    it("should return the exact position given the initial position'[0,0]'   moves DDRU", () => {
        expect(computeFinalPosition(5, 5, [0, 0], [], [], 'DDRU')).toEqual([1, 1]);
    });
});

describe('return the postion with  portal position', () => {
    it("should return the exact position given the initial position'[0,0]', teleport at the initial position ", () => {
        expect(computeFinalPosition(5, 5, [0, 0], [0, 0], [1, 1], '')).toEqual([1, 1]);
    });

    it("should return the exact position given the initial position'[0,0]', teleport with two moves from the initial  position ", () => {
        expect(computeFinalPosition(5, 5, [0, 0], [2, 0], [3, 3], 'RR')).toEqual([3, 3]);
    });
    it('should teleport and continue moving ', () => {
        expect(computeFinalPosition(5, 4, [0, 0], [1, 1], [2, 3], 'DRR')).toEqual([3, 3]);
    });
});
//Edge cases are to defined Example the avatar moves outside the space

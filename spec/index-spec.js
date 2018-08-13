var bowling = require('../index');
import { Frame }  from '../index.js'

var emptyFrame = bowling.createFrame;

describe("Score calculation", function() {
	// it("should sum the 2 points values given by a frame", function() {
	// 	expect(bowling.countPointsInOneThrow(4, 3)).toBe(7);
	// })

	it("should return 0 point when the player misses his 20 throws", function() {
		var scoreTable = [emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame];
		expect(bowling.score(scoreTable)).toBe(0);
	})

	// it("should return 2 points when the player misses his 19 throws and touch 2 pins", function() {
	// 	var scoreTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0];
	// 	expect(bowling.score(scoreTable)).toBe(2);
	// })

	// it("should return 40 points when the player throws and touch 2 pins each launch", function() {
	// 	var scoreTable = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
	// 	expect(bowling.score(scoreTable)).toBe(40);
	// })

	// it("should return 10 points when the player did a spare on the first frame and then misses everything", function() {
	// 	var scoreTable = [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	// 	expect(bowling.score(scoreTable)).toBe(10);
	// })

	// it("should return 12 points when the player did a spare on the first frame and only touch 1 pin then misses everything", function() {
	// 	var scoreTable = [4, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	// 	expect(bowling.score(scoreTable)).toBe(12);
	// })

	// it("should return 150 points when the player get the following score", function() {
	// 	var scoreTable = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
	// 	expect(bowling.score(scoreTable)).toBe(150);
	// })

	// it("should return 10 points when the player did a strike on the first frame and then misses everything", function() {
	// 	var scoreTable = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	// 	expect(bowling.score(scoreTable)).toBe(10);
	// })

	// it("should return 14 points when the player did a strike on the first frame and then misses everything", function() {
	// 	var scoreTable = [10, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	// 	expect(bowling.score(scoreTable)).toBe(14);
	// })

	// it("should return 20 points when the player did only strikes on the last frame", function() {
	// 	var scoreTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 5, 5];
	// 	expect(bowling.score(scoreTable)).toBe(20);
	// })

	// it("should return 50 points when the player did 2 strikes on last frames", function() {
	// 	var scoreTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 5, 5];
	// 	expect(bowling.score(scoreTable)).toBe(50);
	// })
})

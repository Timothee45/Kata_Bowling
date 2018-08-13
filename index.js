var countPointsInOneThrow = function(a, b) {
	return a + b
}

function Frame(first, second, third = 0, fourth = 0) {
  this.first = first;
  this.second = second;
  this.third = third;
  this.fourth = fourth;
}

var createFrame = new Frame(0, 0, 0, 0);

var score = function(tableScores) {
	var total = 0 ;
	var frameScore = 0;

	for(var i = 0; i < 10; i++) {
		var currentFrame = tableScores[i];

		frameScore = currentFrame.first + currentFrame.second + currentFrame.third + currentFrame.fourth;

		if (currentFrame.first == 10) {
			frameScore += tableScores[i + 1].first + tableScores[i + 1].second;
		} else {
			if (frameScore == 10) {
				frameScore += tableScores[i + 1].first;
			}
		}

		total += frameScore;
	}

	return total;
}

exports.countPointsInOneThrow = countPointsInOneThrow;
exports.score = score;
exports.createFrame = createFrame;

export { Frame }

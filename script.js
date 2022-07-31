

board_state = []

width = 200
height = 20
randomnessValue = 0.9
function dead_state(width, height) {

	board = []
	for(let i = 0 ; i < height;i++){
		board.push([])
		for(let k = 0 ; k < width;k++)
			board[i].push(0)
		}
	return board
}


function random_state(width, height){
    // Build the board using your previous work
    let state = dead_state(width, height)

    // TODO: randomize each element of `state`
    // to either 0 or 1

	for(let i = 0 ; i < height;i++){
		for(let k = 0 ; k < width;k++){
			let y = Math.random();
			if (y < randomnessValue)
				state[i][k] = 0
			else
				state[i][k] = 1
		}
			
		}
	return state
}

function render(board) {

	for(let i = 0; i < height; i++) {
		if (i == 0 ) {
			for (let z = 0; z < width; z++) {
				process.stdout.write('~')
			}
		}
		console.log('')
		process.stdout.write('|')
		for(let k = 0 ; k < width; k++) {
			if(board[i][k] == 1) {
				process.stdout.write('#')
			}
			else {
				process.stdout.write(' ')
			}
		}
		process.stdout.write('|')
		if (i+1 == height ) {
			console.log('')
			for (let x = 0; x < width; x++) {
				process.stdout.write('~')
			}
		}
	}

}

render(dead_state(width,height))
render(random_state(width,height))
console.log('')
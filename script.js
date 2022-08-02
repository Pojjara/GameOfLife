

board_state = []

width = 200
height = 20
randomnessValue = 0.9
function dead_state(width, height) {

	board = []
	for(let i = 0 ; i < height;i++){
		board.push([])
		for(let k = 0 ; k < width;k++)
			board[i].push(' ')
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
				state[i][k] = ' '
			else
				state[i][k] = '#'
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
			if(board[i][k] == '#') {
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
	console.log(' ')
	return board
}

function checkIfIsInCorner(cellsH,cellsW,board) {
	if(board[cellsH-1] == undefined){
		console.log('undefined')
	}
	try {
		let check = board[cellsH-1]
	}
	catch (err){
		try {
			board[cellsH][cellsW-1]
		}
		catch (sErr) {
			if (sErr instanceof TypeError) {
				return 'top left'
			}
		}

		if (err instanceof TypeError){
			try {
			board[cellsH][cellsW+1]
			}
		catch (sErr) {
			if (sErr instanceof TypeError) {
				return 'top right'
				}
			}
	}
	}
	try {
		board[cellsH+1]
	}
	catch(err){
		try {
			board[cellsH][cellsW-1]
		}
		catch(sErr) {
			if (sErr instanceof TypeError){
				return 'bottom left'
			}
		}

		if(err instanceof TypeError){
			try {
				board[cellsH][cellsW+1]
			}
			catch(sErr) {
				if(sErr instanceof TypeError){
					return 'bottom right'
				}
			}
		}
	}
	
	return false;
}
function calculateAmountOfNeigbors(cellsH,cellsW,board) {

	let whichCorner = checkIfIsInCorner(cellsH,cellsW,board)
	let amountOfNeigbors = 0

	// if it is in top left corner
	if(whichCorner == 'top left'){
		if(board[cellsH+1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH+1][cellsW+1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH][cellsW+1] == '#') {
			amountOfNeigbors++
		}
	}
	//if it is in top right corner
	if(whichCorner == 'top right'){
		if(board[cellsH+1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH+1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH][cellsW-1] == '#') {
			amountOfNeigbors++
		}
	}
	//if it is in bottom left corner
	if(whichCorner == 'bottom left'){
		if(board[cellsH-1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH-1][cellsW+1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH][cellsW+1] == '#') {
			amountOfNeigbors++
		}
	}
	// if it is bottom right corner
	if(whichCorner == 'bottom right'){
		if(board[cellsH-1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH-1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH][cellsW-1] == '#') {
			amountOfNeigbors++
		}
	}
	//else
	if(whichCorner == false) {
		if (board[cellsH+1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH+1][cellsW+1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH+1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH][cellsW+1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH-1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH-1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH-1][cellsW+1] == '#') {
			amountOfNeigbors++
		}
	}
	return amountOfNeigbors
}


function next_board_state(board) {
	const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

	let state = []
	dead_state(width, height)
	console.log()

	// for each cell calculate the amount of neighbors
	for(let h = 0; h < height; h++) {
		for(let w = 0; w < width; w++) {
			let amountOfNeigbors = calculateAmountOfNeigbors(h,w,board)

			if (amountOfNeigbors < 1) {
				state[h][w] = ' '
			}
			if (amountOfNeigbors == 2 || amountOfNeigbors == 3) {
				state[h][w] = '#'
			}
			if (amountOfNeigbors > 3) {
				state[h][w] = ' '
			}
			if (amountOfNeigbors == 3 && board[i][k] == ' ') {
				state[h][w] = '#'
			}
		}
	}
	return state

	const loop = async () => {
		for(let i = 0; i < 100; i++) {
			console.clear()
			// needs changing, needs to generate not a random but correct board with arguments 
			// Any live cell with 0 or 1 live neighbors becomes dead, because of underpopulation
			// Any live cell with 2 or 3 live neighbors stays alive, because its neighborhood is just right
			// Any live cell with more than 3 live neighbors becomes dead, because of overpopulation
			// Any dead cell with exactly 3 live neighbors becomes alive, by reproduction
			render(random_state(width,height))	
			await wait(100)
		} 
	}
	loop()
		
	}
let x = render(random_state(width,height))
next_board_state(x)
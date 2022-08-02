


const width = 100
const height = 20
randomnessValue = 0.5
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
		if(board[cellsH][cellsW-1] == undefined){
			return 'top left'
		}
		if(board[cellsH][cellsW+1] == undefined) {
			return 'top right'
		}
		else {
			return 'top row'
		}
	}
	if(board[cellsH+1] == undefined){
		if(board[cellsH][cellsW-1] == undefined){
			return 'bottom left'
		}
		if(board[cellsH][cellsW+1] == undefined){
			return 'bottom right'
		}
		else{
			return 'bottom row'
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
		if(board[cellsH+height-1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH+height-1][cellsW+1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH+height-1][cellsW+width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH][cellsW+width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH+1][cellsW+width-1] == '#') {
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
		if(board[cellsH+height-1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH+height-1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH+height-1][cellsW-width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH][cellsW-width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH+1][cellsW-width-1] == '#') {
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
		if(board[cellsH-height+1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH][cellsW+width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH-1][cellsW+width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH-height+1][cellsW+width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH-height+1][cellsW+1] == '#') {
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
		if(board[cellsH-height+1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH][cellsW-width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH-height+1][cellsW-width-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH-height+1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if(board[cellsH-1][cellsW-width-1] == '#') {
			amountOfNeigbors++
		}

	}
	if(whichCorner == 'top row'){
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
		if (board[cellsH+height-1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH+height-1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH+height-1][cellsW+1] == '#') {
			amountOfNeigbors++
		}
	}
	if(whichCorner == 'bottom row'){
		if (board[cellsH-1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH-1][cellsW+1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH-1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH][cellsW+1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH-height+1][cellsW] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH-height+1][cellsW-1] == '#') {
			amountOfNeigbors++
		}
		if (board[cellsH-height+1][cellsW+1] == '#') {
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
	

	console.clear()
	let state = dead_state(width, height)

	// for each cell calculate the amount of neighbors
	for(let h = 0; h < height; h++) {
		for(let w = 0; w < width; w++) {
			let amountOfNeigbors = calculateAmountOfNeigbors(h,w,board)

			if (amountOfNeigbors <= 1 && board[h][w] == '#') {
				state[h][w] = ' '
			}
			if (amountOfNeigbors == 2 && board[h][w] == '#' || amountOfNeigbors == 3 && board[h][w] == '#') {
				state[h][w] = '#'
			}
			if (amountOfNeigbors > 3 && board[h][w] == '#') {
				state[h][w] = ' '
			}
			if (amountOfNeigbors == 3 && board[h][w] == ' ') {
				state[h][w] = '#'
			}
		}
	}
	return state
	
		
	}
let startingState = random_state(width,height)
render(startingState)
let nextState = next_board_state(startingState)
render(nextState)

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const loop = async () => {
	for(let i = 0; i < 100; i++) {
		console.clear()
		// needs changing, needs to generate not a random but correct board with arguments 
		// Any live cell with 0 or 1 live neighbors becomes dead, because of underpopulation
		// Any live cell with 2 or 3 live neighbors stays alive, because its neighborhood is just right
		// Any live cell with more than 3 live neighbors becomes dead, because of overpopulation
		// Any dead cell with exactly 3 live neighbors becomes alive, by reproduction
		nextState = next_board_state(nextState)
		render(nextState)
	
		await wait(100)
	} 
}
loop()

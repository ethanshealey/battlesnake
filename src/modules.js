
const avoidBasicDeath = (moves, props) => {

    const [head, neck] = [props.you.head, props.you.body[1]]
    const [boardWidth, boardHeight] = [props.board.width, props.board.height]

    // dont eat neck
    if(neck.x < head.x || head.x - 1 < 0) 
        moves.left = false
    else if(neck.x > head.x || head.x + 1 >= boardWidth)
        moves.right = false
    else if(neck.y < head.y || head.y - 1 < 0)
        moves.down = false
    else if(neck.y > head.y || head.y + 1 >= boardHeight) 
        moves.up = false

    const body = props.you.body

    // dont eat myself
    body.forEach(segment => {
        if(segment.x === head.x+1 && segment.y === head.y)
            moves.right = false
        if(segment.x === head.x-1 && segment.y === head.y)
            moves.left = false
        if(segment.y === head.y+1 && segment.x === head.x)
            moves.up = false
        if(segment.y === head.y-1 && segment.x === head.x)
            moves.down = false
    })

    return moves
}

module.exports = {
    avoidBasicDeath: avoidBasicDeath
}
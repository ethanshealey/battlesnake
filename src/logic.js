/****
 * Welcome to my battlesnake logic!
 * 
 * Created by Ethan Shealey
 */

const info = () => {
    console.log('INFO')
    return {
        apiversion: '1',
        author: 'Ethan Shealey',
        color: '#4f9ff0',
        head: 'default',
        tail: 'default'
    }
}

const start = (props) => {
    console.log(`${props.game.id} START`)
}

const end = (props) => {
    console.log(`${props.game.id} END`)
}

const move = (props) => {

    const moves = {
        up: true,
        down: true,
        left: true,
        right: true
    }

    const [head, neck] = [props.you.head, props.you.neck]
    if(neck.x < head.x) 
        moves.left = false
    else if(neck.x > head.x)
        moves.right = false
    else if(neck.y < head.y)
        moves.down = false
    else if(neck.y > head.y) 
        moves.up = false

    const safe_moves = Object.keys(moves).filter(keys => moves[keys])
    const res = {
        move: safe_moves[Math.floor(Math.random() * safe_moves.length)]
    }

    return res

}

module.exports = {
    info: info,
    start: start,
    end: end,
    move: move
}
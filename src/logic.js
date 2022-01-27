/****
 * Welcome to my battlesnake logic!
 * 
 * Created by Ethan Shealey
 */

const { avoidBasicDeath } = require('./modules')

const info = () => {
    console.log('INFO')
    return {
        apiversion: '1',
        author: 'Ethan Shealey',
        color: '#4f9ff0',
        head: 'pixel',
        tail: 'pixel'
    }
}

const start = (props) => {
    console.log(`${props.game.id} START`)
}

const end = (props) => {
    console.log(`${props.game.id} END`)
}

const move = (props) => {

    let moves = {
        up: true,
        down: true,
        left: true,
        right: true
    }

    moves = avoidBasicDeath(moves, props)

    // decide which moves is possible
    const safe_moves = Object.keys(moves).filter(keys => moves[keys])

    // craft response 
    const res = {
        move: safe_moves[Math.floor(Math.random() * safe_moves.length)]
    }

    // debug
    console.log('----------------------------------------------------')
    console.log(`Head: ${JSON.stringify(head)}`)
    console.log(`Safe Moves: ${safe_moves}`)
    console.log(`Moving: ${res.move}`)
    console.log('----------------------------------------------------')

    return res

}

module.exports = {
    info: info,
    start: start,
    end: end,
    move: move
}
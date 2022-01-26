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
    console.log(`${props.game.id} MOVE`)
}

module.exports = {
    info: info,
    start: start,
    end: end,
    move: move
}
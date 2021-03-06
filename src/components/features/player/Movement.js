import store from '../../../config/Store';
import { playerMove, faceToNorth, faceToSouth, faceToEast, faceToWest } from './Reducer'
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../../config/constants';

export default function handleMovement(player) {

    function handleKeyDown(e) {
        switch (e.key) {
            case 'a': // LEFT ARROW
                faceToWest()
                return [-1 * SPRITE_SIZE,  0];
            case 'w': // UP ARROW
                faceToNorth()
                return [ 0, -1 * SPRITE_SIZE];
            case 'd': // RIGHT ARROW
                faceToEast()
                return [ 1 * SPRITE_SIZE,  0];
            case 's': // DOWN ARROW
                faceToSouth()
                return [ 0,  1 * SPRITE_SIZE];
            default:
                return [0, 0];
        }
    };

    function observeBoundaries(oldPos, newPos) {
        return ( 0 <= newPos[0] && newPos[0] < MAP_WIDTH &&
             0 <= newPos[1] && newPos[1] < MAP_HEIGHT) 
             ? newPos : oldPos;
    }

    function moveTo(direction) {
        const currentPosition = store.getState().player.position;
        const newPosition = [currentPosition[0] + direction[0],currentPosition[1] + direction[1]]

        playerMove(observeBoundaries(currentPosition, newPosition))
    }

    window.addEventListener('keydown', e => {
        e.preventDefault();
        moveTo(handleKeyDown(e));
    });

    return player;
}
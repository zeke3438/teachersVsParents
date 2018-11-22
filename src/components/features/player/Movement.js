import store from '../../../config/Store';
import { SPRITE_SIZE } from '../../../config/constants';

export default function handleMovement(player) {

    function handleKeyDown(e) {
        switch (e.keyCode) {
            case 37: // LEFT ARROW
                return [-1 * SPRITE_SIZE,  0];
            case 38: // UP ARROW
                return [ 0, -1 * SPRITE_SIZE];
            case 39: // RIGHT ARROW
                return [ 1 * SPRITE_SIZE,  0];
            case 40: // DOWN ARROW
                return [ 0,  1 * SPRITE_SIZE];
            default:
                break;
        }
    };

    function moveTo(direction) {
        const currentPosition = store.getState().player.position;
        const newPosition = [currentPosition[0] + direction[0],currentPosition[1] + direction[1]]

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: newPosition
        });
    }

    window.addEventListener('keydown', e => {
        e.preventDefault();
        moveTo(handleKeyDown(e));
    });

    return player;
}
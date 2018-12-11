import { targetMove } from './Reducer';

export default function handleMovement(target) {

    function moveTo(e) {
        targetMove({x:e.clientX, y:e.clientY});
    }

    window.addEventListener('mousemove', e => {
        moveTo(e);
    });

    return target;
}
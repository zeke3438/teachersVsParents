import { targetMove } from './Reducer';

export default function handleMovement(target) {

    function moveTo(e) {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.

        targetMove({map: [x,y], screen: { x:e.clientX, y:e.clientY } });
    }

    window.addEventListener('mousemove', e => {
        moveTo(e);
    });

    return target;
}
import store from '../../../config/Store';

export default function handleMovement(player) {

    function moveTo(e) {

        // get player pos
        // const currentPLayerPosition = store.getState().player.position;

        // get screen target position
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.

        

        store.dispatch({
            type: 'TARGET_MOVE',
            payload: [x,y]
        });
    }

    window.addEventListener('mousemove', e => {
        moveTo(e);
    });

    return player;
}
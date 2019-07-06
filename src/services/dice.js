import { getRandomInt } from '../utils';

const usage = ["dice [*max value]"];

function dice_roll({ max_value=6 }, thread_id, fb_api) {
    let roll = getRandomInt(max_value) + 1
    fb_api.sendMessage(`Rolling... ${roll}`, thread_id);
}

export default {
    name:'Dice',
    usage,
    dice_roll
};
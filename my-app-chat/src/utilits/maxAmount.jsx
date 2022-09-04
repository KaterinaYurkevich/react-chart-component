import {data} from '../data';

export function maxAmount() {
    let spendings = data.map(elem => elem.amount);
    let max = spendings.reduce((a, b) => a > b ? a : b, 0);
    return max;
}
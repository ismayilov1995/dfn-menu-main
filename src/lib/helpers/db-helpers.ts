export function getRangeString(rangeArray: string[]) {
    return rangeArray.join(`&ranges=`);
}

export function later(delay: number) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}

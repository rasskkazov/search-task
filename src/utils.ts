export function deBounce<Args extends unknown[], Result>(
    fn: (...args: Args) => Result,
    time: number
) {
    let timer: number;
    return (...args: Args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, time);
    };
}

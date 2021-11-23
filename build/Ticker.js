export default class Ticker {
    tickFunction;
    interval;
    lastTickTimeStamp;
    paused;
    constructor(tickFunction, interval) {
        this.tickFunction = tickFunction;
        this.interval = interval;
        this.paused = true;
        this.toggleRunning();
    }
    toggleRunning() {
        this.lastTickTimeStamp = performance.now();
        if (this.paused) {
            requestAnimationFrame(this.step);
            this.paused = false;
        }
        else {
            this.paused = true;
        }
    }
    step = (timestamp) => {
        if (timestamp - this.lastTickTimeStamp >= this.interval) {
            this.tickFunction();
            this.lastTickTimeStamp = timestamp;
        }
        if (!this.paused) {
            requestAnimationFrame(this.step);
        }
    };
}
//# sourceMappingURL=Ticker.js.map
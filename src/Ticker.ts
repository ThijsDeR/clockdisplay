import ClockDisplay from "./ClockDisplay";

export default class Ticker {
    private tickFunction : () => void;

    private interval : number

    private lastTickTimeStamp : number;

    private paused : boolean
    constructor(tickFunction: () => void, interval: number) {
        this.tickFunction = tickFunction
        this.interval = interval
        this.paused = true
        this.toggleRunning()
    }


    public toggleRunning() {
        this.lastTickTimeStamp = performance.now()

        if(this.paused){
            requestAnimationFrame(this.step);
            this.paused = false
        } else {
            this.paused = true
        }
    }
    
    /**
     * This MUST be an arrow method in order to keep the `this` variable working
     * correctly. It will otherwise be overwritten by another object caused by
     * javascript scoping behaviour.
     *
     * @param timestamp a `DOMHighResTimeStamp` similar to the one returned by
     *   `performance.now()`, indicating the point in time when `requestAnimationFrame()`
     *   starts to execute callback functions
     */
    private step = (timestamp: number) => {
        // Check if it is time to perform the next Tick
        if (timestamp - this.lastTickTimeStamp >= this.interval) {
            // Call the method of this object that needs to be called
            this.tickFunction()
            this.lastTickTimeStamp = timestamp;
        }
        // Request the browser to call the step method on next animation frame
        if(!this.paused){
            requestAnimationFrame(this.step);
        }
    };
}
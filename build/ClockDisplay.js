import NumberDisplay from './NumberDisplay.js';
import Ticker from './Ticker.js';
export default class ClockDisplay {
    hours;
    minutes;
    seconds;
    output;
    ticker;
    constructor(output) {
        this.output = output;
        this.hours = new NumberDisplay(24);
        this.minutes = new NumberDisplay(60);
        this.seconds = new NumberDisplay(60);
        this.ticker = new Ticker(() => {
            this.timeTick();
        }, 1000);
        this.updateDisplay();
    }
    timeTick() {
        this.seconds.increment();
        if (this.seconds.getValue() === 0) {
            this.minutes.increment();
            if (this.minutes.getValue() === 0) {
                this.hours.increment();
            }
        }
        this.updateDisplay();
    }
    setTime(hours, minutes, seconds) {
        this.hours.setStringValue(hours);
        this.minutes.setStringValue(minutes);
        this.hours.setStringValue(seconds);
        this.updateDisplay();
    }
    updateDisplay() {
        const displayString = `${this.hours.getStringValue()}:${this.minutes.getStringValue()}:${this.seconds.getStringValue()}`;
        this.output.innerText = displayString;
    }
    toggleDisplay() {
        this.ticker.toggleRunning();
    }
}
//# sourceMappingURL=ClockDisplay.js.map
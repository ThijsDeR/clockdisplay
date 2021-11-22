export default class ClockDisplay {
    hours;
    minutes;
    output;
    constructor(output) {
        this.output = output;
        this.hours = 0;
        this.minutes = 0;
        this.updateDisplay();
    }
    timeTick() {
        this.minutes = (this.minutes + 1) % 60;
        if (this.minutes === 0) {
            this.hours = (this.hours + 1) % 24;
        }
        this.updateDisplay();
    }
    setTime(hours, minutes) {
        this.hours = Number(hours);
        this.minutes = Number(minutes);
        this.updateDisplay();
    }
    updateDisplay() {
        let defaultNumber = '0';
        this.output.innerText = `${this.hours < 10 ? defaultNumber + this.hours : this.hours} : ${this.minutes < 10 ? defaultNumber + this.minutes : this.minutes}`;
    }
}
//# sourceMappingURL=ClockDisplay.js.map
class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    const interval = setInterval(() => {
      this.currentTime += 1;
    
      if (typeof printTimeCallback === "function"){
          printTimeCallback();
      }
      }, 10)
      this.intervalId = interval;
  }

  getMinutes() {
    // ... your code goes here
    let minutes =  Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime / 100) % 60;
    return seconds;
  }

  getCentiseconds() {
    // ... your code goes here
    let centiseconds = Math.floor(this.currentTime % 100); 
    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? `0${value}` : `${value}`;
  }
 

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
  // "mm:ss.SS"
}

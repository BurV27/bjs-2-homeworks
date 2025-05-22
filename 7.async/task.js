class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.intervalID = null;
  }

  addClock(time, callback) {
    if (time && callback){  
            
      if (this.alarmCollection.length > 0) {
        for (let i = 1; i < this.alarmCollection.length; i=i+1) {
          if (this.alarmCollection[i-1].time === time) {
            console.warn('Уже присутствует звонок на это же время');
          }
        }
      }
            this.alarmCollection.push({time:time, callback:callback, canCall:true});
            
        } else {
            throw new Error ('Отсутствуют обязательные аргументы');
        }
    }

  removeClock(time){
    this.alarmCollection = this.alarmCollection.filter(times => times.time !== time)
  }

  getCurrentFormattedTime(){
    const timeCall = new Date();
    let timeHours = timeCall.getHours()
    let timeMinute = timeCall.getMinutes()

    if (timeHours < 10){
      timeHours = "0" + timeHours
    }

    if (timeMinute < 10){
      timeMinute = "0" + timeMinute
    }

    return `${timeHours}:${timeMinute}`
  }

  start(){
    if(this.intervalID !== undefined){
      return
    }
    
    this.intervalID = setInterval(() => {
      this.alarmCollection.forEach(elem => {
        if(elem.time === this.getCurrentFormattedTime() && elem.canCall === true){
          elem.canCall = false;
          elem.callback();
        }
      })
    }, 1000)
  }

  stop(){
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

  resetAllCalls(){
    this.alarmCollection = this.alarmCollection.forEach(elem => elem.canCall = true)
  }

  clearAlarm(){
    stop();
    this.alarmCollection = []
  }
}
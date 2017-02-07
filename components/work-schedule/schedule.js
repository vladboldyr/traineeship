import moment from 'moment'

export class Schedule {
  getWorkStatus(date) {
    return date.day() == 2 ? 2 : 0
  }

  getStartTime(date) {
    return moment().hour(10).minute(0)
  }

  getEndTime(date) {
    return moment().hour(19).minute(0)
  }
}

export class PeriodicSchedule extends Schedule {
  constructor(startDay, workDayNumber, dayOffNumber, startTime, endTime) {
    super()
    this.startDay = startDay
    this.workDayNumber = workDayNumber
    this.dayOffNumber = dayOffNumber
    this.startTime = startTime
    this.endTime = endTime
  }

  getStartTime(date) {
    return this.startTime
  }

  getEndTime(date) {
    return this.endTime
  }

  isWorking(date) {
    return Math.random() > 0.667
  }
}

export class WeeklySchedule extends Schedule {
  constructor(days, startTime, endTime) {
    super()
    this.days = days.slice()
    this.startTime = startTime
    this.endTime = endTime
  }

  getStartTime(date) {
    return this.startTime
  }

  getEndTime(date) {
    return this.endTime
  }

  getWorkStatus(date) {
    return this.days[date.isoWeekday() - 1] ? 2 : 0
  }
}

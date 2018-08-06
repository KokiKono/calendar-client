/**
 * Created by kokikono on 2018/08/04.
 */
const moment = require('moment');

class Calendar {

    moment: moment.Moment;

    constructor() {
        this.moment = moment();
    }

    constructor(date: Date) {
        this.moment = moment(date);
    }

    monthCalendar(): int[] {
        const result = [];
        const privateMoment = this.moment;
        privateMoment.date(0);
        privateMoment.day(0);
        for (let rowCounter = 0; rowCounter < 5; rowCounter += 1) {
            const row = [];
            for (let colCounter = 0; colCounter < 7; colCounter += 1) {
                row.push(Number(privateMoment.format('D')));
                privateMoment.add(1, 'days');
            }
            result.push(row);
        }
        console.log(result);
        return result;
    }
}

export default Calendar;

/**
 * Created by kokikono on 2018/08/04.
 */

it('calendar month', () => {
    // var calendar = new Calendar();
    import Calendar = require('../Calendar');
    const calendar = new Calendar();
    const monthCalendar = calendar.monthCalendar();
    test('start day is', () => expect(monthCalendar[0][0]).toBe(29));
});
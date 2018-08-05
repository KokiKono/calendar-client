/**
 * Created by kokikono on 2018/08/04.
 */
import Calendar from '../src/model/Calendar';

const date = new Date(2018, 7, 4);
const calendar = new Calendar(date);
const monthCalendar = calendar.monthCalendar();

test('start day is 29', () => {
    expect(monthCalendar[0][0]).toBe(29);
});

test('the first week end is 4', () => {
    expect(monthCalendar[0][6]).toBe(4);
});

test('the second week start is 5, end is 11', () => {
    expect(monthCalendar[1][0]).toBe(5);
    expect(monthCalendar[1][6]).toBe(11);
});

test('the three week start is 12, end is 18', () => {
    expect(monthCalendar[2][0]).toBe(12);
    expect(monthCalendar[2][6]).toBe(18);
});

test('the force week start is 19, end is 25', () => {
    expect(monthCalendar[3][0]).toBe(19);
    expect(monthCalendar[3][6]).toBe(25);
});

test('the fifth week start is 26, end is 1', () => {
    expect(monthCalendar[4][0]).toBe(26);
    expect(monthCalendar[4][6]).toBe(1);
})

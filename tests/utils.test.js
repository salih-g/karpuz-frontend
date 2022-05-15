import { timeSince } from '../src/utils';

test('Time since', async () => {
	const aDay = 24 * 60 * 60 * 1000;

	expect(timeSince(new Date(Date.now() - aDay / 24))).toEqual('60 minutes');
	expect(timeSince(new Date(Date.now() - aDay))).toEqual('24 hours');
	expect(timeSince(new Date(Date.now() - aDay * 2))).toEqual('2 days');
	expect(timeSince(new Date(Date.now() - aDay * 31))).toEqual('1 months');
	expect(timeSince(new Date(Date.now() - aDay * 366))).toEqual('1 years');
});

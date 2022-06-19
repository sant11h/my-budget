import { BeautifyDatePipe } from './beautify-date.pipe';

describe('BeautifyDatePipe', () => {
  it('when date is one year ago should return a year ago', () => {
    const pipe = new BeautifyDatePipe();
    const dateNow = new Date(Date.now());
    const dateOneYearAgo = new Date(
      dateNow.setFullYear(dateNow.getFullYear() - 1)
    );

    const result = pipe.transform(dateOneYearAgo);

    expect(result).toStrictEqual('a year ago');
  });
  it('when date now should return a few seconds ago', () => {
    const pipe = new BeautifyDatePipe();
    const dateNow = new Date(Date.now());

    const result = pipe.transform(dateNow);

    expect(result).toStrictEqual('a few seconds ago');
  });
});

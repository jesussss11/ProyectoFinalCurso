import { FilterPipe } from './filter.pipe';
import { DatePipe } from '@angular/common';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});

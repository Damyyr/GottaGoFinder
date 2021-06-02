import readableUnitHelper from './ReadableUnitHelper'

test('should display a byte number', () => {
  const readableSize = readableUnitHelper(10);
  expect(readableSize).toEqual('10 B');
});

test('should display a KiloByte number', () => {
  const readableSize = readableUnitHelper(10240);
  expect(readableSize).toEqual('10 KB');
});

test('should display a MegaByte number', () => {
  const readableSize = readableUnitHelper(10485760);
  expect(readableSize).toEqual('10 MB');
});

test('should display a GigaByte number', () => {
  const readableSize = readableUnitHelper(10737418240);
  expect(readableSize).toEqual('10 GB');
});
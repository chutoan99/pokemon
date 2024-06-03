// Define a utility type to create a range of numbers from 0 to T (exclusive)
type _NumRange<T extends number, R extends unknown[] = []> = R['length'] extends T
  ? R[number]
  : _NumRange<T, [R['length'], ...R]>;

// Create a type for numbers from 0 to T-1
type NumRange<T extends number> = number extends T ? number : _NumRange<T>;
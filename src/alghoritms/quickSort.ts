import { CompareFunction } from '@/shared/types/CompareFunction';

export function quickSort<T>(array: T[], compareFunction: CompareFunction<T>) {
  const sort = (array: T[], start: number, end: number) => {
    if (start < end) {
      const pi = partition(array, start, end, compareFunction);

      sort(array, start, pi - 1);
      sort(array, pi + 1, end);
    }
  };

  sort(array, 0, array.length - 1);
}

function partition<T>(array: T[], start: number, end: number, compareFunction: CompareFunction<T>) {
  const pivot = array[end];

  let i = start;

  for (let j = start; j <= end - 1; j++) {
    if (compareFunction(array[j], pivot)) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  [array[i], array[end]] = [array[end], array[i]];

  return i;
}

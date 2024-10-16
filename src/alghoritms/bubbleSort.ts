import type { CompareFunction } from '@/shared/types/CompareFunction';

export function bubbleSort<T>(array: T[], compareFunction: CompareFunction<T>) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (compareFunction(array[j + 1], array[j])) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

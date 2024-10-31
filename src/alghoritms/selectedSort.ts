import type { CompareFunction } from '@/shared/types/CompareFunction';

export const selectedSort = <T>(arr: T[], compareFunction: CompareFunction<T>) => {
  for (let i = 0; i < arr.length; i++) {
    let targetIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (compareFunction(arr[targetIndex], arr[j])) {
        targetIndex = j;
      }
    }

    [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
  }
};

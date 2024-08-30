import TodoItem from '../../types/TodoItem';

export function sortedItemsDoneFinish(items: TodoItem[]) {
  return items.sort((a: TodoItem, b: TodoItem) => {
    if (a.isDone && !b.isDone) {
      return 1;
    }
    if (!a.isDone && b.isDone) {
      return -1;
    }
    return 0;
  });
}

const {
  getAllTask,
  getOneTask,
  deleteTask,
  updateTask,
} = require('./task.service')

describe('Task Service', () => {
  describe('getAllTask', () => {
    test('should return an array of tasks', () => {
      // Act
      const tasks = getAllTask();
      // Assert
      expect(tasks).toBeInstanceOf(Array);
      expect(tasks).toEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          description: expect.any(String),
          completed: expect.any(Boolean),
        }),
      ]));
    });
  });

  describe('getOneTask', () => {
    test('should return a task object', () => {
      // Arrange
      const taskId = 1;
      // Act
      const task = getOneTask(taskId);
      // Assert
      expect(task).toEqual({
        id: taskId,
        title: 'Task 1',
        description: 'Description 1',
        completed: true,
      });
    });

    test('should return null when task is not found', () => {
      // Arrange
      const taskId = 999;
      // Act
      const task = getOneTask(taskId);
      // Assert
      expect(task).toBeNull();
    });
  });

  describe('updateTask', () => {
    test('should return a task object', () => {
      // Arrange
      const taskId = 1;
      const taskToUpdate = {
        title: 'Task updated',
        description: 'Description updated',
        completed: true,
      }
      // Act
      const task = updateTask(taskId, taskToUpdate);
      // Assert
      expect(task).toEqual({ id: taskId, ...taskToUpdate });
    });

    test('should return null when task is not found', () => {
      // Arrange
      const taskId = 100;
      const taskToUpdate = {
        title: 'Task 1',
        description: 'Description 1',
        completed: true,
      }
      // Act
      const task = updateTask(taskId, taskToUpdate);
      // Assert
      expect(task).toBeNull();
    });
  });

  describe('deleteTask', () => {
    test('should return a task object', () => {
      // Arrange
      const taskId = 2;
      // Act
      const task = deleteTask(taskId);
      // Assert
      expect(task).toEqual({
        id: taskId,
        title: 'Task 2',
        description: 'Description 2',
        completed: false,
      });
    });

    test('should return null when task is not found', () => {
      // Arrange
      const taskId = 999;
      // Act
      const task = deleteTask(taskId);
      // Assert
      expect(task).toBeNull();
    });
  });
})

const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('Task Endpoints', () => {
  describe('GET /tasks', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request.get('/api/tasks/');

      expect(res.statusCode).toEqual(200);
    });

    test('should respond with an array of tasks', async () => {
      const res = await request.get('/api/tasks/');

      expect(res.body).toBeInstanceOf(Array);
      expect(res.body).toEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          description: expect.any(String),
          completed: expect.any(Boolean),
        }),
      ]));
    });
  });

  describe('POST /tasks', () => {
    test('should respond with a 201 status code', async () => {
      const res = await request.post('/api/tasks/').send({
        title: 'Task 4',
        description: 'Description 4',
      });

      expect(res.statusCode).toEqual(201);
    });

    test('should respond with a 400 when title is missing', async () => {
      // Arrange
      const task = {
        description: 'Description 4',
      }

      // Act
      const res = await request.post('/api/tasks/').send(task);

      // Assert
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({
        message: 'Title is required'
      });
    });

    test('should respond with a 400 when desciption is missing', async () => {
      // Arrange
      const task = {
        title: 'Title 4',
      }

      // Act
      const res = await request.post('/api/tasks/').send(task);

      // Assert
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual({
        message: 'Description is required'
      });
    });

    test('should respond with the created task', async () => {
      // Arrange
      const task = {
        title: 'New task from testing',
        description: 'Description XXX',
      }

      // Act
      const res = await request.post('/api/tasks/').send(task);

      // Assert
      expect(res.body.id).toBeDefined();
      expect(res.body).toEqual(expect.objectContaining({
        id: expect.any(Number),
        title: 'New task from testing',
        description: 'Description XXX',
        completed: false,
      }));
    });

    test('should have a Content-type: application/json; charset=utf-8 header', async () => {
      // Arrange
      const task = {
        title: 'New task from testing',
        description: 'Description XXX',
      }

      // Act
      const res = await request.post('/api/tasks/').send(task);

      // Assert
      expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
      expect(res.header['content-type']).toEqual(expect.stringContaining('json'));
    });
  });

  describe('GET /tasks/:id', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request.get('/api/tasks/1');

      expect(res.statusCode).toEqual(200);
    });

    test('should respond with the requested task', async () => {
      const res = await request.get('/api/tasks/1');

      expect(res.body).toEqual(expect.objectContaining({
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        completed: true,
      }));
    });

    test('should respond with a 404 when task is not found', async () => {
      const res = await request.get('/api/tasks/999');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({
        message: 'Task not found with id: 999'
      });
    });
  });

  describe('PATCH /tasks/:id', () => {
    test('should respond with a 200 status code', async () => {
      // Arrange
      const taskId = 1;
      const task = {
        title: 'Task 1 (updated)',
      }
      // Act
      const res = await request.patch(`/api/tasks/${taskId}`).send(task);
      // Assert
      expect(res.statusCode).toEqual(200);
    });

    test('should respond with the updated task', async () => {
      // Arrange
      const taskId = 1;
      const task = {
        title: 'Task 1 (updated)',
      }
      // Act
      const res = await request.patch(`/api/tasks/${taskId}`).send(task);
      // Assert
      expect(res.body).toEqual(expect.objectContaining({
        id: 1,
        title: 'Task 1 (updated)',
        description: 'Description 1',
        completed: true,
      }));
    });

    test('should respond with a 404 when task is not found', async () => {
      const res = await request.patch('/api/tasks/999').send({
        title: 'Task 1 (updated)',
      });

      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({
        message: 'Task not found with id: 999'
      });
    });
  });

  describe('DELETE /tasks/:id', () => {
    test('should respond with a 204 status code', async () => {
      const res = await request.delete('/api/tasks/1');

      expect(res.statusCode).toEqual(204);
    });

    test('should respond with a 404 when task is not found', async () => {
      const res = await request.delete('/api/tasks/999');

      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({
        message: 'Task not found with id: 999'
      });
    });
  });
});

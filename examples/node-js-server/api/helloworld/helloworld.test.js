const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('Helloworld Endpoints', () => {
  test('should respond with a 200 status code', async () => {
    const res = await request.get('/api/helloworld/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Hello World!' });
  });
});

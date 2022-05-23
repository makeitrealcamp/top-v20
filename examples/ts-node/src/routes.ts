import { Application } from 'express';

import notesRouter from './api/note';

function routes(app: Application) {
  app.use('/api/notes', notesRouter);
}

export default routes;

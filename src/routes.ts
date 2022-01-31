import { Router } from 'express';
import {
  createUrlShortener,
  redirectUrlShortener,
} from './controllers/UrlShortener';

const routes = Router();

routes.post('/', createUrlShortener);
routes.get('/:encoded', redirectUrlShortener);
routes.get('/', (req, res) => {
  res.json({ ok: true });
});

export { routes };

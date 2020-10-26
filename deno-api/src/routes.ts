import { Router, Context } from 'https://deno.land/x/oak/mod.ts';
import youtubeChaptersController from './controllers/youtube-chapters.controller.ts';

const router = new Router();

router.get('/', (context: Context) => {
  context.response.status = 200;
  context.response.headers.set('Content-Type', 'application/json');
  context.response.body = { teste: 'ok' };
});

router
  .get('/api/v1/video-chapters/:id', youtubeChaptersController.getChapters)
  .get('/api/v1/video-chapters/:id/:seconds', youtubeChaptersController.getChapter);
router
  .post('/api/v1/video-chapters/:id/', youtubeChaptersController.addChapter);

export default router;

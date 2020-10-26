import { RouterContext } from 'https://deno.land/x/oak/mod.ts';
import { Chapter, getChapters, pushChapter } from '../models/youtube-chapters.model.ts';

type ChaptersParams = { id: string };
type ChapterParams = ChaptersParams & { id: string, seconds: string  };


function searchChapter(id: string, seconds: string): Chapter|undefined {
  return getChapters()
    .find((item) => item.timeInSeconds === parseInt(seconds));
}


class YoutubeChaptersController {
  getChapters({ params, response }: RouterContext<ChaptersParams>) {
    response.status = 200;
    response.body = getChapters();
  }

  getChapter({ params: { id, seconds }, response}: RouterContext<ChapterParams>) {
    const chapter = searchChapter(id, seconds!);
    if (chapter) {
      response.status = 200;
      response.body = chapter;
    } else {
      response.status = 404;
      response.body = { message: `Chapter not found` };
    }
  }

  async addChapter({ params: { id }, request, response }: RouterContext<ChaptersParams> ) {
    const body = await request.body();
    const newChapter: Chapter = body.value;
    const chapter = searchChapter(id, newChapter.timeInSeconds.toString());
    if (!chapter) {
      pushChapter(newChapter);
      response.status = 201;
      response.body = { message: '201' };
    } else {
      response.status = 200;
      response.body = { message: 'Chapter already exists.' };
    }
  }
}

export default new YoutubeChaptersController();

interface Chapter {
  text: string;
  time: string;
  timeInSeconds: number;
  link: string;
}

const chapters: Chapter[] = [
  {
    text: 'Loiane Groner',
    time: '2:18:11',
    timeInSeconds: 8291,
    link: 'https://www.youtube.com/watch?v=lkj&8291'
  },
  {
    text: 'André baltieri (Balta.IO)',
    time: '2:29:20',
    timeInSeconds: 8960,
    link: 'https://www.youtube.com/watch?v=lkj&8960'
  },
  {
    text: 'Reinaldo Silotto (TekZoom)',
    time: '2:43:09',
    timeInSeconds: 9789,
    link: 'https://www.youtube.com/watch?v=lkj&9789'
  },
  {
    text: 'Vanessa Weber (Código FOnte TV)',
    time: '2:49:34',
    timeInSeconds: 10174,
    link: 'https://www.youtube.com/watch?v=lkj&10174'
  },
  {
    text: 'Filipe Deschamps',
    time: '2:58:35',
    timeInSeconds: 10715,
    link: 'https://www.youtube.com/watch?v=lkj&10715'
  },
  {
    text: 'Dicas finais de todos',
    time: '2:12:51',
    timeInSeconds: 11571,
    link: 'https://www.youtube.com/watch?v=lkj&11571'
  },
];

const getChapters = () => {
  return chapters;
}

const pushChapter = (chapter: Chapter) => {
  chapters.push(chapter);
}

export { Chapter, getChapters, pushChapter };

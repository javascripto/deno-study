import { writeFileStrSync } from 'https://deno.land/std/fs/mod.ts';
import getLessons from './logic/getLessons.ts';

const lessons = await getLessons();
writeFileStrSync('./lessons.json', JSON.stringify(lessons, null, 2));
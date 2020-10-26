import { Client } from 'https://deno.land/x/mysql/mod.ts';
import Lesson from '../model/lesson.ts';

export default async (): Promise<Lesson[]> => {
  const connection = await new Client().connect({
    hostname: '127.0.0.1',
    username: 'debian-sys-maint',
    password: 'LIHVIcBWE0VE9bzO',
    db: 'deno'
  });

  const lessons: Lesson[] = await connection.query('SELECT id, name FROM lessons');
  connection.close();
  return lessons;
}

import { exif as fuckRulesExif } from './img/fuck-rules.jpg?exif';
import fuckRules from './img/fuck-rules.jpg?file';
import { exif as justVibinExif } from './img/just-vibin.jpg?exif';
import justVibin from './img/just-vibin.jpg?file';
import { exif as letMeGoHomeExif } from './img/let-me-go-home.jpg?exif';
import letMeGoHome from './img/let-me-go-home.jpg?file';
import { exif as cozyCaveExif } from './img/cozy-cave.jpg?exif';
import cozyCave from './img/cozy-cave.jpg?file';

export default [
  {
    source: fuckRules,
    alt: 'dog in front of a sign that says "no pets allowed"',
    caption: 'no gods no masters.',
    data: fuckRulesExif.image,
  },
  {
    source: letMeGoHome,
    alt: 'selfie of a girl in a yellow beanie and black mask next to a concerned-looking dog',
    caption: 'i don\'t know why she took me to the dog bar i don\'t even like beer.',
    data: letMeGoHomeExif.image,
  },
  {
    source: justVibin,
    alt: 'dog sitting on a balcony in front of a potted plant',
    caption: 'this is my garden.',
    data: justVibinExif.image,
  },
  {
    source: cozyCave,
    alt: 'dog sitting in the entryway of a tent',
    caption: 'you must say five positive affirmations before entering the cozy cave.',
    data: cozyCaveExif.image,
  },
];

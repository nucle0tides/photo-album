import { exif as fuckRulesExif } from './img/fuck-rules.jpg?exif';
import fuckRules from './img/fuck-rules.jpg?file';
import { exif as justVibinExif } from './img/just-vibin.jpg?exif';
import justVibin from './img/just-vibin.jpg?file';
import { exif as letMeGoHomeExif } from './img/let-me-go-home.jpg?exif';
import letMeGoHome from './img/let-me-go-home.jpg?file';
import { exif as cozyCaveExif } from './img/cozy-cave.jpg?exif';
import cozyCave from './img/cozy-cave.jpg?file';
import { exif as jungleJuiceExif } from './img/do-not-drink-the-jungle-juice.jpg?exif';
import jungleJuice from './img/do-not-drink-the-jungle-juice.jpg?file';
import { exif as iowaExif } from './img/going-to-iowa.jpg?exif';
import iowa from './img/going-to-iowa.jpg?file';
import { exif as blepExif } from './img/blep.jpeg?exif';
import blep from './img/blep.jpeg?file';
import { exif as broadwayExif } from './img/guarding-broadway-cafe.jpg?exif';
import broadway from './img/guarding-broadway-cafe.jpg?file';

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
  {
    source: jungleJuice,
    alt: 'a dog being offered jungle juice',
    caption: 'mom? can you come get me? i\'m not sure college is for me.',
    data: jungleJuiceExif.image,
  },
  {
    source: iowa,
    alt: 'a girl squeezing a dog close to her',
    caption: 'what is this "iowa" you speak of and are we there yet?',
    data: iowaExif.image,
  },
  {
    source: blep,
    alt: 'a dog posing with their tongue out',
    caption: 'blep',
    data: blepExif.image,
  },
  {
    source: broadway,
    alt: 'a puppy sitting in a chair looking over the camera lens',
    caption: 'oh gosh oh gosh oh gosh please don\'t leave me out here with those cars',
    data: broadwayExif.image,
  },
];

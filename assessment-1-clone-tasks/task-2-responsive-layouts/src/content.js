import originalCopy from '../assets/text-content.md?raw';
import rogerRabbit from '../assets/who-framed-roger-rabbit.jpg';
import hook from '../assets/hook.jpg';
import laLaLand from '../assets/la-la-land.jpg';
import hiddenFigures from '../assets/hidden-figures.jpg';
import palmSprings from '../assets/palm-springs.jpg';
import barbie from '../assets/barbie.jpg';

const posters = {
  'Who Framed Roger Rabbit (1988)': rogerRabbit,
  'Hook (1991)': hook,
  'La La Land (2016)': laLaLand,
  'Hidden Figures (2016)': hiddenFigures,
  'Palm Springs (2020)': palmSprings,
  'Barbie (2023)': barbie,
};

// Read the supplied heading and description pairs in their original order.
export const films = originalCopy.replace(/\r\n/g, '\n').trim()
  .split(/^# /m)
  .filter(Boolean)
  .map((block) => {
    const [title, ...description] = block.split('\n');
    return { title, description: description.join('\n').trim(), poster: posters[title] };
  });

import { readable } from 'svelte/store';

export const width = readable(window.screen.width, function start(set) {
  window.addEventListener('resize', () => {
    set(window.screen.width);
  });

  return function stop() {
    window.removeEventListener('resize', null);
  };
});

export const height = readable(window.screen.height, function start(set) {
  window.addEventListener('resize', () => {
    set(window.screen.height);
  });

  return function stop() {
    window.removeEventListener('resize', null);
  };
});

import { atom, atomFamily, selectorFamily } from 'recoil';

export const countStateFamily = atomFamily({
  key: 'countState',
  default: 0,
});

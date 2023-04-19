import { atom } from 'recoil';

export const countListState = atom({
  key: 'countListState',
  default: [0, 0, 0],
});

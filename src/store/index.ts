import { atom, selectorFamily } from 'recoil';

export const countListState = atom({
  key: 'countListState',
  default: [0, 0, 0],
});

export const countState = selectorFamily<number, number>({
  key: 'countState',
  get:
    (id) =>
    ({ get }) => {
      return get(countListState)[id];
    },

  // optional set
  // set:
  //   (id) =>
  //   ({ set, get }, newValue) => {
  //     set(
  //       countListState,
  //       get(countListState).map((count, i) => (id === i ? count + 1 : count))
  //     );
  //   },
});

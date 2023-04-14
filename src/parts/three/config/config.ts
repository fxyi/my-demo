export const TOWER = "tower";
export const PROPS = "props";
export const PLAYER = "player";
export const TOWER_TALL = 50;
export const SIZE = 10;

export const CONFIG = [
  {
    level: 1,
    data: [
      [[], [TOWER], [TOWER], []],
      [[TOWER], [TOWER], [TOWER], []],
      [[TOWER], [TOWER], [], []],
      [[TOWER], [TOWER, PLAYER], [], []],
    ],
  },
  // {
  //   level: 2,
  //   data: [
  //     [1, 2, 3, 4, 5],
  //     [1, 2, 3, 4, 5],
  //     [1, 2, 3, 4, 5],
  //     [1, 2, 3, 4, 5],
  //   ],
  // },
];

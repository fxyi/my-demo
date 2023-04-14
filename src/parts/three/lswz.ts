// import { initEnvironment } from "./lib/init";
// import { TOWER_TALL, TOWER, CONFIG } from "./config/config";
// import { Pillar } from "./lib/Pillar";
// import { Player } from "./lib/Player";

// import * as THREE from "three";
// import TWEEN from "@tweenjs/tween.js";

// // const clock = new THREE.Clock();

// const { scene, camera, renderer } = initEnvironment();
// const render = () => {
//   renderer.render(scene, camera);
//   requestAnimationFrame(render);
//   TWEEN.update();
//   // const dt = clock.getDelta();
//   // if (playerMixer) {
//   //   playerMixer.update(dt);
//   // }
// };
// render();

// const matrixTower: any = [];

// const initMatrixTower = async () => {
//   const { data } = CONFIG[0];
//   for (let z = 0; z < data.length; z++) {
//     matrixTower[z] = [];
//     for (let x = 0; x < data[z].length; x++) {
//       const config = data[z][x];
//       if (config.includes(TOWER)) {
//         const pillar = new Pillar(scene, config, { x, z }, data.length);
//         matrixTower[z][x] = pillar

//         const playerModel = await Player.loadPlayer(pillar.player);
//         if( playerModel instanceof THREE.Group) {
//           playerModel.position.set(x * 10, matrixTower[z][x].tower.mesh.position.y + TOWER_TALL / 2, z * 10);
//           scene.add(playerModel);
//         }
//       }
//       // else {
//       //   matrixTower[z][x] =
//       // }
//     }
//   }
// };

// initMatrixTower();

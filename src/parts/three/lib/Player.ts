import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const gltfLoader = new GLTFLoader();
export class Player {
  playerModel?: THREE.Group;
  animations: any = {};
  playerMixer?: THREE.AnimationMixer;
  // hpModel;
  // position;

  constructor() {}

  static async loadPlayer(player: Player | undefined) {
    if (player === undefined) return;

    const initItem = (name: string) => {
      const item = new THREE.TextureLoader().load(`/img/player/${name}.png`);
      item.flipY = false;
      return new THREE.MeshBasicMaterial({
        map: item,
        color: 0xffffff,
        // skinning: true,
      });
    };

    return new Promise((resolve, reject) => {
      gltfLoader.load(
        "/model/lswz.glb",
        gltf => {
          const model = gltf.scene;
          console.log(model)
          // 1. 模型贴图处理
          model.traverse(o => {
            if (o.name === "Face") {
              console.log(o);
              (o as THREE.Mesh).material = initItem("face1"); // face_mtl
            }
            if (o.name === "网格.003_1") {
              (o as THREE.Mesh).material = initItem("tex3"); // body_mtl
            }
            if (o.name === "网格.003_0") {
              (o as THREE.Mesh).material = initItem("tex4"); // shoe_mtl
            }
            if (o.name === "网格_0" || o.name === "网格_1") {
              (o as THREE.Mesh).material = initItem("tex1"); // left_hand_mtl
            }
            if (o.name === "网格.002_0" || o.name === "网格.002_1") {
              (o as THREE.Mesh).material = initItem("tex2"); // right_hand_mtl
            }
          });
          model.scale.set(0.15, 0.15, 0.15);
          model.name = "player-model";

          player.playerModel = model;

          // 2. 模型动画处理
          player.playerMixer = new THREE.AnimationMixer(model); // 动画混合器
          for (let i = 0; i < gltf.animations.length; i++) {
            const clip = gltf.animations[i];
            const action = player.playerMixer.clipAction(clip);
            player.animations[clip.name] = action;
          }
          player.animations.idle.play(); // 初次默认idle动画
          resolve(model);
        },
        // xhr => {
        //   console.log("player model", (xhr.loaded / xhr.total) * 100 + "% loaded");
        // },
        undefined,
        err => {
          console.log("load player err", err);
          reject();
        }
      );
    });
  }

  static async loadHP() {}
}

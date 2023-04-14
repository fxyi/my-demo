import { Sprite, KeyframeTrack, AnimationClip, AnimationMixer } from "three";
import { createNormalSprite } from "./sprite";
import { ThreeEnv } from "../lib/init";

export const sriteAnimation = (envInstance: ThreeEnv) => {
  // 精灵/粒子
  const spriteArr: Sprite[] = [];
  createNormalSprite(envInstance, spriteArr);
  const times = [0, 1, 2, 3];
  const point1 = [0, 0, 0];
  const point2 = [10, 5, 10];
  const point3 = [10, 5, 0];
  const point4 = [0, 0, 0];
  const valuse = [...point1, ...point2, ...point3, ...point4];
  const posKF = new KeyframeTrack("sprite.position", times, valuse); // 设置关键帧数据
  const clip = new AnimationClip("test", 3, [posKF]); // 创建关键帧动画
  const mixer = new AnimationMixer(spriteArr[0]); // 动画播放器
  const clipAction = mixer.clipAction(clip); // 动画动作对象
  // clipAction.loop = LoopOnce; // 默认循环播放，可以设置单次播放
  clipAction.clampWhenFinished = true;
  console.log(spriteArr[0]);
  clipAction.play();
  setTimeout(() => {
    clipAction.stop();
  }, 5000);
  return mixer;
};

import { BoxGeometry, MeshLambertMaterial, Mesh, BufferAttribute } from "three";
export const boxAnimation = (envInstance: ThreeEnv) => {
  const material = new MeshLambertMaterial({
    color: 0x808080,
  });
  const geometry = new BoxGeometry(5, 5, 5);
  const target1 = new BoxGeometry(5, 20, 5).attributes.position; // 变高
  const target2 = new BoxGeometry(1, 5, 1).attributes.position; //变细
  geometry.morphAttributes.position = [target1 as BufferAttribute, target2 as BufferAttribute];

  const mesh = new Mesh(geometry, material);
  envInstance._scene.add(mesh);

  // morphTargetInfluences权重系数控制变形程度
  // const flu = mesh.morphTargetInfluences as number[];
  // flu[0] = 1.0;
  // flu[1] = 1.0;

  mesh.name = "box";
  const kg1 = new KeyframeTrack("box.morphTargetInfluences[0]", [0, 3], [0, 1]); // 设置关键帧数据
  const kg2 = new KeyframeTrack("box.morphTargetInfluences[1]", [3, 6], [0, 1]); // 设置关键帧数据
  const clip = new AnimationClip("test", 6, [kg1, kg2]); // 创建关键帧动画
  const mixer = new AnimationMixer(mesh); // 动画播放器
  const clipAction = mixer.clipAction(clip);
  clipAction.play();
  return mixer;
};

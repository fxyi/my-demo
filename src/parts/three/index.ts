import { Clock } from "three";
import { ThreeEnv } from "./lib/init";
import TWEEN from "@tweenjs/tween.js";

const envInstance = new ThreeEnv();

import { sriteAnimation } from "./test/animation";
const mixer = sriteAnimation(envInstance)

// import { boxAnimation } from "./test/animation";
// const mixer = boxAnimation(envInstance)

const clock = new Clock();
// 传入定制loop函数˝
envInstance.render((_this: ThreeEnv) => {
  return () => {
    // console.log(new Date(Date.now()).getSeconds()) // 120fps
    _this._renderer.render(_this._scene, _this._camera);
    TWEEN.update();
    mixer.update(clock.getDelta());
  };
});

import { PROPS, PLAYER } from "../config/config";
import * as THREE from "three";
import { Player } from "./Player";
import { Tower } from "./Tower";
import { Props } from "./Props";

export class Pillar {
  tower: Tower;
  props?: Props;
  player?: Player;

  constructor(scene: THREE.Scene, config: string[], position: any, n: number) {
    this.tower = new Tower(position, n);
    scene.add(this.tower.mesh);
    if (config.includes(PROPS)) {
      this.props = new Props();
    }
    if (config.includes(PLAYER)) {
      this.player = new Player();
    console.log(this)
    }
  }
}

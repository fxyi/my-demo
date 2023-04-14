import * as THREE from "three";
import { TOWER_TALL, SIZE } from "../config/config";

export class Tower {
  mesh;
  
  constructor(position: any, n: number) {
    const { x, z } = position;
    const geometry = new THREE.BoxGeometry(SIZE - 0.3, TOWER_TALL, SIZE - 0.3);
    const texture = new THREE.TextureLoader().load("/img/brick_diffuse.jpg");
    texture.repeat.x = 1;
    texture.repeat.y = 1;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 9);

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: texture,
    });

    const height = (n - (x + z)) * SIZE;
    const tower = new THREE.Mesh(geometry, material);
    tower.position.set(x * SIZE, height - TOWER_TALL / 2, z * SIZE);
    tower.userData.position = position; //存储柱子在矩阵中的位置

    this.mesh = tower;
  }
}

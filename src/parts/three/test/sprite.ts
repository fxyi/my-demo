import { Sprite, SpriteMaterial, Texture } from "three";
import { ThreeEnv } from "../lib/init";

const TOTAL = 20;

// 使用canvas贴图来实现圆形
const getSprite = () => {
  const canvas = document.createElement("canvas");
  const size = 8;
  canvas.width = size * 2;
  canvas.height = size * 2;
  const context = canvas.getContext("2d");
  context!.fillStyle = "#00ff00";
  context!.arc(size, size, size / 1.5, 0, Math.PI * 2);
  context!.fill();

  const texture = new Texture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const createNormalSprite = (envInstance: ThreeEnv, spriteArr: Sprite[]) => {
  // 粒子材质
  const material = new SpriteMaterial({
    color: 0x008800,
    // color: Math.random() * 0xffffff,
    map: getSprite(),
  });
  for (let i = -TOTAL; i < TOTAL; i++) {
    for (let j = -TOTAL; j < TOTAL; j++) {
      const sprite = new Sprite(material);
      if (i === 0 && j === 0) {
        sprite.name = `sprite`;
        spriteArr.push(sprite);
      }

      sprite.position.set(i * 10, 0, j * 10);
      if (i === 1 && j === 1) {
        console.log(sprite);
      }
      // sprite.scale.set(0.5, 0.5, 0.5);
      envInstance.getScene().add(sprite);
    }
  }
};

// api depressed
// const createSystemSprite = () => {
//   const geometry = new BufferGeometry();
//   const material = new PointsMaterial({
//     size: 4,
//     vertexColors: true,
//   });
//   const vertexs = [];
//   // const colors = [];
//   for (let i = -5; i < 5; i++) {
//     for (let j = -5; j < 5; j++) {
//       vertexs.push(new Vector3(i * 10, 0, j * 10));
//       // colors.push(new Color(Math.random() * 0xffffff));
//     }
//   }
//   geometry.setFromPoints(vertexs);
//   new Points(geometry, material);
// };
// createSystemSprite()

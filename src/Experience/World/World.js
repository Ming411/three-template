// 单独渲染你想创建的世界
import * as THREE from 'three';
import Experience from '../Experience';
export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({wireframe: true})
    );
    this.scene.add(testMesh);
  }
}

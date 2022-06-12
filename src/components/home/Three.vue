<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from 'three';
let scene, mesh;
export default {
  name: 'Three',
  data() {
    return {
      camera: '', //创建相机
      renderer: '', //创建渲染器
      geometry: '', //创建展示对象
      material: '', //创建材质
      selectObject: {}, //与射线相交的数组
      requestID: '',// 作为启用动画时返回得id，用于路由跳转离开页面得时候停止动画
    };
  },
  mounted() {
    this.init();
    window.addEventListener('resize', this.onWindowResize, false);
    window.addEventListener('click', this.onMouseDblclick, false);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('click', this.onMouseDblclick);
    // 页面离开时停止动画
    window.cancelAnimationFrame(this.requestID);
  },
  methods: {
    init() {
      // 创建场景
      scene = new THREE.Scene();
      // 创建相机
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      this.camera.position.z = 5;
      this.camera.position.x = 0;
      this.createGeometry();
      this.createRender();
      this.animate();
    },
    // 创建展示对象和材质
    createGeometry() {
      this.geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      mesh = new THREE.Mesh(this.geometry, this.material);
      scene.add(mesh);
    },
    //创建渲染器
    createRender() {
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      // 这里和官网不同，是因为我想在canvas内部添加元素 ，用position：absolute  就可以 是的元素和     three.js得模型对象共存一个画布了
      let container = document.getElementById('container');
      container.appendChild(this.renderer.domElement);
    },
    // 渲染场景
    animate() {
      this.requestID = requestAnimationFrame(this.animate);
      this.render();
    },
    // 设置物体行为
    render() {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      this.renderer.render(scene, this.camera);
    },
    // 窗口变动触发的方法
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    // 鼠标双击触发的方法
    onMouseDblclick(event) {
      // 获取 raycaster 和所有模型相交的数组，其中的元素按照距离排序，越近的越靠前
      var intersects = this.getIntersects(event);
      // 获取选中最近的 Mesh 对象
      if (
        intersects.length != 0 &&
        intersects[0].object instanceof THREE.Mesh
      ) {
        this.$router.push({ name: 'test' });
      }
    },
    // 获取与射线相交的对象数组
    getIntersects(event) {
      event.preventDefault();
      // 声明 raycaster 和 mouse 变量
      var raycaster = new THREE.Raycaster();
      var mouse = new THREE.Vector2();

      // 通过鼠标点击位置,计算出 raycaster 所需点的位置,以屏幕为中心点,范围 -1 到 1
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      //通过鼠标点击的位置(二维坐标)和当前相机的矩阵计算出射线位置
      raycaster.setFromCamera(mouse, this.camera);

      // 获取与射线相交的对象数组，其中的元素按照距离排序，越近的越靠前
      var intersects = raycaster.intersectObjects(scene.children);

      //返回选中的对象
      return intersects;
    },
  },
};
</script>

<style  scoped>
#container {
  position:absolute;
  top:0;
  width: 100vw;
  height: 100vh;
}
</style>


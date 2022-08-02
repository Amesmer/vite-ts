<script lang="ts" setup name="Login">
import * as THREE from 'three';

class chinaMap {
    constructor() {
        this.init()
    }
    init() {
        //创建场景
        this.scene = new THREE.Scene()
        //设置相机
        this.setCamera()
        //设置渲染器
        this.setRenderer()
        //设置几何体
        const geometry = new THREE.BoxGeometry()
        // 材质
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        // 新的物体   mesh
        this.cube = new THREE.Mesh(geometry, material)
        // 添加到场景
        this.scene.add(this.cube)
        // 渲染
        // this.render()
        this.animate()


    }
    // 新建透视相机
    setCamera() {
        // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        // 转动z轴
        this.camera.position.z = 5
    }

    // 设置渲染器
    setRenderer() {
        this.renderer = new THREE.WebGLRenderer()
        // 设置画布的大小
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        //这里 其实就是canvas 画布  renderer.domElement
        document.body.appendChild(this.renderer.domElement)
    }

    // 设置环境光
    setLight() {
        this.ambientLight = new THREE.AmbientLight(0xffffff) // 环境光
        this.scene.add(ambientLight)
    }

    //render 方法 
    render() {
        this.renderer.render(this.scene, this.camera)
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.render()
    }



}

let map = new chinaMap()
</script>
<template>
    <div>login组件</div>
</template>

<style lang="less" scoped>
</style>
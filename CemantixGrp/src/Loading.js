import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import  GLView from 'expo-gl';
import { Asset } from 'expo-asset';
import { Renderer, TextureLoader } from 'expo-three';
import * as THREE from 'three';
 
const Loading = () => {
  const { width, height } = Dimensions.get('window');
 
  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: renderWidth, drawingBufferHeight: renderHeight } = gl;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, renderWidth / renderHeight, 0.1, 1000);
    const renderer = new Renderer({ gl });
    renderer.setSize(renderWidth, renderHeight);
    const asset = Asset.fromModule(require('../Component/img/logoBlanc.png'));
    await asset.downloadAsync();
    const texture = new TextureLoader().load(asset.localUri);
 
    const materials = [];
    for (let i = 0; i < 6; i++) {
        materials.push(new THREE.MeshBasicMaterial({
            map: texture,
            color: 0xffffff,
            opacity: 1
        }));
    }
 
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
 
    camera.position.z = 5;
 
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };
 
  return (
<View style={styles.container}>
<GLView
        style={{ width, height }}
        onContextCreate={onContextCreate}
      />
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
 
export default Loading;
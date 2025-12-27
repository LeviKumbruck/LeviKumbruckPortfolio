<template>
    <TresPerspectiveCamera :position="[0, 0, 3]" :fov="45" />

    <TresAmbientLight :intensity="1.0" />
    <TresDirectionalLight :position="[2, 2, 2]" :intensity="0.5" />

    <OrbitControls :enable-zoom="false" :enable-pan="false" :rotate-speed="0.25" :enable-damping="true" :damping-factor="0.08" />

    <TresGroup ref="group">
        <primitive v-if="props.kind === 'tennis' && tennis" :object="tennis.scene" :scale="0.19" :rotation="[5, 0, 0]" :position="[0, -0.6, -0.5]" />
        <primitive v-if="props.kind === 'genk' && genkModel" :object="genkModel.scene" :scale="7" :rotation="[0, 0, 0]" :position="[0, -0.8, 0]"  />
        <primitive v-if="props.kind === 'f1' && car" :object="car.scene" :scale="0.56" :rotation="[0, 0, 0]" :position="[0, -0.9, 0]" />
    </TresGroup>
</template>


<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'
import { OrbitControls, useGLTF } from '@tresjs/cientos'

const props = defineProps<{
  kind: 'tennis' | 'genk' | 'f1'
}>()

const group = shallowRef<any>(null)

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta, elapsed }) => {
  if (!group.value) return
  group.value.rotation.y = 0.4 * elapsed
})

const { state: genkModel } = useGLTF('models/genk_echt.glb')
const { state: car } = useGLTF('models/f1.glb')
const { state: tennis } = useGLTF('models/tennisraket.glb')

</script>
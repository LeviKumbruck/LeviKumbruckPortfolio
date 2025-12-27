<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { TresCanvas } from '@tresjs/core'

// load scene as a child component
const Hobby3DScene = defineAsyncComponent(() => import('./Hobby3DScene.vue'))

defineProps<{
    kind: 'tennis' | 'genk' | 'f1'
}>()
</script>

<template>
    <TresCanvas :alpha="true" :clear-alpha="0" :antialias="true">
        <Hobby3DScene :kind="kind" />
    </TresCanvas>
</template>

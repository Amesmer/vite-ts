<script lang="ts" setup name="other">
import useStore from '@/store';
import { onBeforeUnmount,onMounted, onUpdated, onUnmounted } from 'vue'

const {category}=useStore()
console.log(category.money)


onBeforeUnmount(() => {
  console.log('11111');
  
})
onUnmounted(()=>{
  console.log('22222');
  
})

</script>
<template>
  <div>other组件</div>
</template>

<style lang="less" scoped></style>
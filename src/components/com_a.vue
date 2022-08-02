<script lang="ts" setup>
// defineProps({
//   money: {
//     type: Number,
//     required: true
//   },
//   car: {
//     type: String,
//     required: true
//   }
// })
// 还可以通过解构来指定默认值
const {money,car='didi'}=defineProps<{
    money:number
    car:string
}>()

// const emit =defineEmits(['change','update'])
// 实现更细粒度的校验
const emit=defineEmits<{
    (e:'changeMoney',money:number):void
    (e:"changeCar",car:string):void
}>()
let arr=[1,2,3]
// arr.forEach
</script>
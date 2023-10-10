<template>
    <TransitionGroup class="list" name="list" tag="ul">
        <CartCard 
            v-for="item of basket" 
            :key="item.id"
            :item="item"
        />
    </TransitionGroup>
    <Transition>
        <p v-show="basket.length === 0" class="message">Корзина пуста</p>
    </Transition>
</template>

<script>
import useProductsStore from '../store/index.js'
import CartCard from '../components/CartCard.vue'

export default {
    components: {CartCard},
    computed: {
        basket(){
            return useProductsStore().basket
        }
    }
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
@media (max-width: 1440px) {
  .message {
    text-align: center;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.list-leave-active {
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
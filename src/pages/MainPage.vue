<template>
    <TransitionGroup name="list" tag="ul" class="list">
        <ProductCard 
            v-for="item in prodList" 
            :key="item.id" 
            :item="item"
        />
    </TransitionGroup>
    <button 
        @click="getProducts" 
        class="btn"
        v-show="totalPages > 0"
        >Показать еще</button>
</template>

<script>
import useProductsStore from '../store/index.js'
import ProductCard from '../components/ProductCard.vue';

export default {
    components: {ProductCard},
    data() {
        return {
            prodList: [...useProductsStore().product.slice(0, 4)],
            cardPerPage: 4,
            loadedCards: 4,
        }
    },
    computed: {
        totalPages(){
            return useProductsStore().product.length - this.loadedCards
        }
    },
    methods: {
        getProducts(){
            let data = useProductsStore().product
            this.prodList.push(...data.slice(this.loadedCards, this.loadedCards + this.cardPerPage))
            this.loadedCards += this.cardPerPage
        }
    }
}
</script>

<style scoped>
.list {
    justify-content: space-between;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: repeat(4, 280px);
    gap: 20px;
}
.btn {
    display: block;
    margin: auto 0 auto auto;
    width: 142px;
    height: 25px;
    padding: 3px 18px;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #6A6A6A;
    font-size: 16px;
}
@media (max-width: 1440px) {
  .list {
    justify-content: center;
    grid-template-columns: repeat(3, 280px);
  }
  .btn {
    margin: 0 auto;
  }
}
@media (max-width: 900px) {
  .list {
    grid-template-columns: repeat(2, 280px);
  }
}
@media (max-width: 600px) {
  .list {
    grid-template-columns: repeat(1, 280px);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
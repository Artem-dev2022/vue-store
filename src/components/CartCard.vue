<template>
    <div class="card">
        <img src="../assets/top.jpg" class="img"/>
        <div class="content">
            <button @click="useProducts.deleteFromBasket(item.id)" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect width="19.2846" height="1.92846" rx="0.96423" transform="matrix(0.707104 0.707109 -0.707104 0.707109 1.36353 0)" fill="#333333"/>
                    <rect width="19.2846" height="1.92846" rx="0.96423" transform="matrix(0.707104 -0.707109 0.707104 0.707109 0 13.6365)" fill="#333333"/>
                </svg>
            </button>
            <h2 class="title">{{item.title}}</h2>
            <span class="category" :title="item.description">{{item.description}}</span>
            <span class="price">{{item.price}} ₽</span>
        </div>
    </div>
</template>

<script>
import useProductsStore from '../store/index.js'

export default {
    props: ['item'],
    data() {
        return {
            useProducts: useProductsStore(),
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    width: 500px;
    height: 200px;
}
.img {
    width: 200px;
}
.content {
    display: flex;
    flex-direction: column;
    padding: 0 0 20px 20px;
    width: 100%;
}
.btn {
    display: block;
    margin: 0 0 5px auto;
}
.title {
    margin-bottom: 2px;
    color: #333;
    font-size: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.category {
    display: block;
    color: #333;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -moz-box;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
}
.price {
    display: block;
    margin: auto auto 0 0;
    color: #333;
    font-size: 18px;
}
@media (max-width: 1440px) {
  .card {
    padding-left: 20px;
  }
}
@media (max-width: 600px) {
    .card {
        margin: 0 auto;
        padding-left: 0;
        width: 90%;
        height: 150px;
    }
    .img {
        width: 100px;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .content {
        padding: 0 0 10px 10px;
    }
    .title {
        font-size: 20px;
    }
}
</style>
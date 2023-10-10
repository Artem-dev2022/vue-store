<template>
    <div class="card">
        <img src="../assets/top.jpg" class="img"/>
        <div class="content">
            <h2 class="title">{{item.title}}</h2>
            <span class="category" :title="item.description">{{item.description}}</span>
        </div>
        <div class="bottom">
            <span class="price">{{ item.price }} ₽</span>
            <button @click="useProducts.addToBasket(item)" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                    <path d="M16.5438 19.1647L15.3268 5.61138C15.2936 5.24125 14.9834 4.95774 14.6118 4.95774H12.1021V3.82582C12.1021 1.71626 10.3859 0 8.27646 0C6.1671 0 4.45112 1.71626 4.45112 3.82582V4.95774H1.93966C1.5681 4.95774 1.25788 5.24125 1.22467 5.61138L0.00287038 19.218C-0.015124 19.4188 0.0520678 19.6178 0.188079 19.7666C0.324089 19.9153 0.51638 20 0.71786 20H15.8337C15.8343 20 15.8351 20 15.8356 20C16.2322 20 16.5535 19.6786 16.5535 19.2821C16.5534 19.2422 16.5502 19.2029 16.5438 19.1647ZM5.88685 3.82582C5.88685 2.50792 6.95885 1.43572 8.27656 1.43572C9.59436 1.43572 10.6665 2.50792 10.6665 3.82582V4.95774H5.88685V3.82582ZM1.50311 18.5644L2.59598 6.39346H4.45112V7.67719C4.45112 8.07364 4.77244 8.39505 5.16898 8.39505C5.56553 8.39505 5.88685 8.07364 5.88685 7.67719V6.39346H10.6665V7.67719C10.6665 8.07364 10.9878 8.39505 11.3843 8.39505C11.7809 8.39505 12.1022 8.07364 12.1022 7.67719V6.39346H13.9556L15.0485 18.5644H1.50311Z" fill="#BA967D"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import useProductsStore from '../store/index.js'

export default {
    props: ['item'],
    data(){
        return {
            useProducts: useProductsStore()
        }
    },
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 280px;
    min-height: 450px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
    overflow: hidden;
}
.content {
    padding: 20px;
}
.title {
    margin-bottom: 2px;
    color: #333;
    font-size: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.category {
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
.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto auto 0 auto;
    padding: 0 20px 20px;
    width: 100%;
}
.price {
    color: #333;
    font-size: 18px;
}
</style>
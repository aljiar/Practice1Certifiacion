<template>
  <div class="product">

    <div class="product-image">
      <img v-bind:src="image">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock"> In Stock</p>
      <p v-else> Out of Stock</p>

      <ul>
        <li v-for="detail in details" v-bind:key="detail"> {{ detail }} </li>
      </ul>

      <div v-for="(variant, index) in variants"
           :key="variant.variantId"
           class="color-box"
           :style="{ backgroundColor: variant.variantColor }"
           @mouseover="updateProduct(index)">
      </div>

      <button v-on:click="addToCart1" 
              :disabled="!inStock"
              :class="{disabledButton: !inStock}" >
              Add to cart
        </button>

    </div>

    <div class="cart">
          <p>Cart({{cart.length}})</p>
    </div>

    <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
            <li v-for="review in reviews" v-bind:key="review">
                <p>{{ review.name }}</p>
                <p>Rating: {{ review.rating }}</p>
                <p>{{ review.review }}</p>
            </li>
        </ul>
    </div>

    <product-review @review-submitted="addReview" ></product-review>

  </div>
</template>

<script>
export default {
  data() {
        return {
            brand: 'Apple',
            product: 'iPhone',
            selectedVariant: 0,
            details: ["Capacity:64 GB","Model:Max","Finish:Glossy"],
            variants:[
                {
                    variantId:2234,
                    variantColor:"Gold",
                    variantQuantity:10,
                    variantImage:"iphonegold.jpg"
                },
                {
                    variantId:2235,
                    variantColor:"White",
                    variantQuantity:20,
                    variantImage:"iphonewhite.jpg"
                },
                {
                    variantId:2236,
                    variantColor:"Black",
                    variantQuantity:0,
                    variantImage:"iphoneblack.jpg"
                }
            ],
            reviews: [],
            cart: []
        }
    },
    methods: {
        addToCart: function(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
        },
        updateProduct: function(index){
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview){
            this.reviews.push(productReview)
        },
        addToCart1(){
            this.cart.push(this.variants[this.selectedVariant].variantId)
        }
    },
     computed: {
         title(){
             return this.brand + ' ' + this.product
         },
         image(){
            return this.variants[this.selectedVariant].variantImage
         },
         inStock(){
             return this.variants[this.selectedVariant].variantQuantity
         }
     }
}
</script>

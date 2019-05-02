Vue.component('product',{
    template: `
    <div class="product">

    <div class="product-image">
      <img v-bind:src="image">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock"> In Stock</p>
      <p v-else> Out of Stock</p>

      <ul>
        <li v-for="detail in details"> {{ detail }} </li>
      </ul>

      <div v-for="(variant, index) in variants"
           :key="variant.variantId"
           class="color-box"
           :style="{ backgroundColor: variant.variantColor }"
           @mouseover="updateProduct(index)">
      </div>

      <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{disabledButton: !inStock}" >
              Add to cart
        </button>

    </div>

    <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
            <li v-for="review in reviews">
                <p>{{ review.name }}</p>
                <p>Rating: {{ review.rating }}</p>
                <p>{{ review.review }}</p>
            </li>
        </ul>
    </div>

    <product-review @review-submitted="addReview" ></product-review>

  </div>
    `,
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
            reviews: []
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
})

Vue.component('product-review',{
    template: `
    <form class="review-form" @submit.prevent="onSubmit">

    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="error in errors">{{errors}}</li>
        </ul>
    </p>

    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name">
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review" ></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>
        
    <p>
      <input type="submit" value="Submit">  
    </p>    
  
  </form>
    `,
    data(){
        return{
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods:{
        onSubmit(){
            if(this.name && this.review && this.rating){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                this.$emit('review-submitted',productReview)
                this.name = null,
                this.review = null,
                this.rating = null
            }
            else{
                if(!this.name) this.errors.push("Name required.")
                if(!this.review) this.errors.push("Review required.")
                if(!this.rating) this.errors.push("Rating required.")
            }
            
        }
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        cart: []
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        }
    }
})
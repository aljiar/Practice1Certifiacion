import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ShowForm from '@/components/ShowForm.vue'
import { isNull } from 'util';

describe('ShowForm.vue', () => {
  const msg = 'new message'
  let wrapper;
  beforeEach(function(){
    wrapper = shallowMount(ShowForm,{
      propsData: {msg}
    })
  })
  it('render class product',()=>{
    expect(wrapper.find('.product').exists());
  })
  it('render image product',()=>{
    expect(wrapper.find('.product-image').exists());
  })
  it('render review product',()=>{
    expect(wrapper.find('.product-review').exists());
  })
  it('cart is empty',()=>{
    expect(wrapper.vm.cart.isNull);
  })
  it('cart is not empty',()=>{
    const button = wrapper.find('button')
    button.trigger('click')
    expect(!wrapper.vm.cart.isNull)
  })
})

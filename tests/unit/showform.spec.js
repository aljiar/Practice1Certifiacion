import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ShowForm from '@/components/ShowForm.vue'

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
})

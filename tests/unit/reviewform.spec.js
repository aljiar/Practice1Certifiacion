import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ReviewForm from '@/components/ReviewForm.vue'

describe('ReviewForm.vue', () => {
  const msg = 'new message'
  let wrapper;
  beforeEach(function(){
    wrapper = shallowMount(ReviewForm,{
      propsData: {msg}
    })
  })
  it('render review form',()=>{
    expect(wrapper.find('.product-formm').exists());
  })
})

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

describe('add', () => {
  it('should add 1 to 4 and get 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    const number = 1
    wrapper.vm.add(number);
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
})

describe('subtract', () => {
  it('should subtract 4 from 7 and get 3', () => {
    const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 7
  const number = 4
  wrapper.vm.subtract(number);
  expect(wrapper.vm.runningTotal).to.equal(3)
  })
})

describe('multiply', () => {
  it(' should multiply 3 by 5 and get 15', () => {
    const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 3
  const number = 5
  wrapper.vm.multiply(number);
  expect(wrapper.vm.runningTotal).to.equal(15)
  })
})

describe('divide', () => {
  it('should divide 21 by 7 and get 3', () => {
    const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 21
  const number = 7
  wrapper.vm.divide(number);
  expect(wrapper.vm.runningTotal).to.equal(3)
  })
})

describe('numberClick', () => {
  it('should concatenate multiple number button clicks', () => { //ie. clicking 4 then 2 should give 42
    const wrapper = shallowMount(App)
  wrapper.vm.numberClick(1)
  wrapper.vm.numberClick(9)
  wrapper.vm.numberClick(8)
  wrapper.vm.numberClick(2)
  expect(wrapper.vm.runningTotal).to.equal(1982)
  })
})

describe('operatorClick', () => {
  it('should chain multiple operations together', () => {
    const wrapper = shallowMount(App)
  wrapper.vm.operatorClick('+')
  wrapper.vm.numberClick(5)
  wrapper.vm.operatorClick('=')
  wrapper.vm.operatorClick('*')
  wrapper.vm.numberClick(2)
  wrapper.vm.operatorClick('=')
  wrapper.vm.operatorClick('/')
  wrapper.vm.numberClick(1)
  wrapper.vm.numberClick(0)
  wrapper.vm.operatorClick('=')
  wrapper.vm.operatorClick('-')
  wrapper.vm.numberClick(1)
  wrapper.vm.operatorClick('=')
  expect(wrapper.vm.runningTotal).to.equal(0)
  }) 
})

describe('clearClick', () => {
  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
  wrapper.vm.numberClick(1)
  wrapper.vm.numberClick(0)
  wrapper.vm.numberClick(1)
  wrapper.vm.operatorClick('+')
  wrapper.vm.numberClick(1)
  wrapper.vm.operatorClick('=')
  wrapper.vm.operatorClick('+')
  wrapper.vm.numberClick(7)
  wrapper.vm.operatorClick('=')
  wrapper.vm.clearClick()
  expect(wrapper.vm.runningTotal).to.equal(0)
  expect(wrapper.vm.previousTotal).to.equal(109)
  })
})
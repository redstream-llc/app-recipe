import {action, observable, decorate} from 'mobx'

class MainStore {
  receipe = {};
  category = {items:[], title: ''};

  setRecipe = (rcp) => {
    this.receipe = rcp
    // console.log('this receipe',this.receipe)
  }

  setCategory = (c) => {
    this.category = require(`../assets/data${c.source}`)
    // console.log('this category',this.category)
  }
}

decorate(MainStore, {
  receipe: observable.ref,
  category: observable.ref,
  setRecipe: action,
  setCategory: action
})

const Store = new MainStore();
export default Store;
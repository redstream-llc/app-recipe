import {action, observable} from 'mobx'
import api from './api'

class St {
  @observable.ref receipe = {};

  @action setReg = (rcp) => {
    this.receipe = rcp
  }
}

const Store = new St();
export default Store;
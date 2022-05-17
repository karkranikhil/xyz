import {LightningElement} from 'lwc'
export default class App extends LightningElement{
  cscroll(event){
    const tagname = event.detail
    const elem = this.template.querySelector(tagname)
    if(elem){
      elem.scrollIntoView()
    }
  }
}

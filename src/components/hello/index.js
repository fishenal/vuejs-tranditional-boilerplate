import withRender from './index.html?style=./index.css'
export default withRender({
  name: 'hello',
  data () {
    return {
      msg: 'say hello from component hello'
    }
  }
})
import withRender from './index.html?style=./index.css'
import hello from '../components/hello'
export default withRender({
  name: 'app',
  components: { hello },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
})
import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import { withApollo } from '../lib/apollo'
import { Question } from '../components/Question'

const ClientOnlyPage = props => (
  <App>
    <Header />
    <Question question="Who is the most beautiful girl in the world?"
      options={[
        {
          optionKey:"a",
          text:"Hannah Hartley"
        },
        {
          optionKey:"b",
          text:"Hannah Patricia Hartley"
        },
        {
          optionKey:"c",
          text:"Hannah Ismail"
        },
        {
          optionKey:"d",
          text:"Hannah Ismail-Hartley"
        },
      ]}
    />
  </App>
)

export default withApollo({ssr:true})(ClientOnlyPage)

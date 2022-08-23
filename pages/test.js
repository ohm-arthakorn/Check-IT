import { useState } from "react"
import axios from 'axios'

export default function test(props) {

  const [res, setRes] = useState(null)

  function callAPI() {
    axios({
      'method': 'POST',
      'url':'/api/graphql',
      'data': {
        'query': `
          query Query{
            getStudents {
              name
            }
          }
        `
      }
    }).then((res) => {
      setRes(JSON.stringify(res.data))
    }).catch((e) => console.log(e))
  }

  return (
    <div>
      <p>Your Home page</p>
      <button onClick={()=>callAPI()}>ClickMe</button>
      <p>{res}</p>
      
    </div>
  )
}

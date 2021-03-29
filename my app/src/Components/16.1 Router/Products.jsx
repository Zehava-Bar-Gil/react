import React, {userState, useEffect} from 'react';


export default class Products extends Component {
         state = {
              data:[]
}

componentDidMount=()=>{
    this.setState({data:data})
}

render(){
    return (
        <div>
            {
             this.state.data.map((products, i)=>(
                 <Link key={i} to={`/product/${products.id}`}>{products.title}<br /></Link>
              )
           )
        }
            
        </div>
      );     
   }
}


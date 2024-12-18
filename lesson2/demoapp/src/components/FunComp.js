import {React} from 'react'
// 2. tạo function component
/*
input : props
output : react element
 */
function FunComps(props){
    return(
        <div>
            <h2>Tôi là function component</h2>
            <p>Xin chào Reactjs</p>
            <h3>Sử dụng props</h3>
            <p>Name:{props.name}</p>
            <p>Company:{props.company}</p>
        </div>
    )
}
//3. export
export default FunComps;
import{React,Component} from 'react'
// 2. tạo class component
/**/
class ClassComp extends Component{
    render(){
        return(
            <div>
                <h2>Tôi là class component</h2>
                <hr/>
                <h3>Sử dụng props</h3>
                <p>Name : <b>{this.props.name}</b></p>
                <p>add: <b>{this.props.address}</b></p>
            </div>
        )
    }
}

// 3.export
export default ClassComp;
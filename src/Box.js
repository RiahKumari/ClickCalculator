import React from "react"
class Box extends React.Component{
         render(){
             return (<div className="box">{this.props.n}</div>)
         }
        }
export default Box;
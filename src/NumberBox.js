import React from "react"
import Box from "./Box"

class NumberBox extends React.Component{
    render(){
        return <div>
                        <div>
                            <Box n="1" /><Box n="2" /><Box n="3" />
                        </div>
                        <div>
                            <Box n="4"/><Box n="5"/><Box n="6"/>
                        </div>
                        <div>
                            <Box n="7"/><Box n="8"/><Box n="9"/>
                        </div>
                 </div>
          }
     }

export default NumberBox;
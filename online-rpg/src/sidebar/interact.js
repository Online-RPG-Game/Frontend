import React from 'react'
import styled from 'styled-components'

const FormInput = styled.input`
  border: none;
  padding-left: 2em;
  height: 3em;
  font-size: 1em;
  width:100%;
  font-family: "Press Start 2P", cursive;
  background-color: #e4ebe5;
  padding-top: 0.3em;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
`

const handleClick = (e)=>{
    return 'hello'
}


export default function Interact(){
    return(
        <div style={{textAlign:'center'}}>
            <form>
                <FormInput type='text' placeholder='Enter move' value={e=>handleClick} />
            </form>
        </div>
    )
}
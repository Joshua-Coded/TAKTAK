import React from 'react'
import {NextPage} from "next";


interface IProps {
text: string;

}
const NoResult: NextPage<IProps> = ({text}) => {
  return (
    <div>NoResult</div>
  )
}

export default NoResult
import { useState } from "react"

// interface Props {
//     value?:boolean
// }
export const useBoolean= () => {
const  [status,setStatus] = useState<boolean>(false )

const isTrue = () => {
   return setStatus(true)
}
const isFalse = () => {
   return setStatus(false)
}
return [isTrue, isFalse, status] as const

}
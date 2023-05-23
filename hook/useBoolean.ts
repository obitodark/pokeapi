import { useState } from "react"

// interface Props {
//     value?:boolean
// }
export const useBoolean= () => {
const  [status,setStatus] = useState<boolean>(false )

const isTrue = () => {
    setStatus(true)
}
const isFalse = () => {
    setStatus(false)
}
return [isTrue, isFalse, status] as const

}
export const removeElement=()=>{
    return {
        type:"removeElement"
    }
}
export const addElement=(num)=>{
    return {
        type:"addElement",
        payload:num
    }
}
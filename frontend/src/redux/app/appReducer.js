
const initState = {
    isLoading : false,
    isError: false,
    contactData : []
}


export const appReducer = (state = initState,{type,payload}) => {
    switch(type){
        default : {
            return state
        }
    }
}
export const getProducts =()=>async(dispatch)=>{
    try{
        const data= await fetch("https://amazoncloneappapi.herokuapp.com/getproducts",{
            method:"GET",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        });

        const res = await data.json();
        console.log(res) ;
        dispatch({type:"SUCCESS_GET_PRODUCTS" ,payload:res})
    }catch (error){
        dispatch({type:"fail_GET_PRODUCTS" ,payload:error.responce})
    }
}
const emailRegX = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

class inputValidator{

    validate(id,value){
        if(id === "email"){
            console.log(value)
            if(!emailRegX.test(value)){
                console.log("Invalid email")
                return {
                    isInVallid : true,
                    error: "Invalid E-Mail"
                }
            }
            else{
                return {
                    isVallid : false,
                    error: ""
                }
            }
        }
    }
}

export default new inputValidator()
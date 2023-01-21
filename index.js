function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}


function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}


function validateForm(){
    let returnval = true;
    clearErrors();
    let name = document.forms['myForm']["fname"].value;
    if (name.length<2){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    
    // let email = document.getElementById("text").value;
    // let regx = /^([a-zA-Z0-9]+)@([a-zA-Z]).([a-z]{2,5})(.[a-z]{2,5})?$/;
    // if (!regx.text(email)){
    //     seterror("email", "*Please provide valid email addres");
    //     returnval = false;
    // }

    let password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    let cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }




    return returnval;
}




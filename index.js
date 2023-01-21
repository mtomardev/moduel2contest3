function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}


function validateForm(){
    let returnval = true;
    let name = document.forms['myForm']["fname"].value;
    if (name.length<2){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }





    return returnval;
}




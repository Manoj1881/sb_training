if(name.value.length == 0){
document.getElementsByName('name').innerText = "* All fields are mandatory *";
name.focus();
return false;
}

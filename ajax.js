function update_user(){
    user_number = document.getElementById("user_number").value;
    alert(user_number);
    user_number = document.getElementById("user_number").value;
    httpRequest = new XMLHttpRequest();
    httpRequest.open("GET","https://reqres.in/api/users/"+user_number);
    httpRequest.send();
    httpRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            user_data = JSON.parse(this.responseText);
            document.getElementById("output").innerHTML= user_data.data.first_name;
        }
    }
}

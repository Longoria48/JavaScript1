    //display alert good afternoon
    //window.alert("Good afternoon");
    //declare the variable to hold the div element
    let container = document.getElementById("container");
    //getElementById is the method to locate the element by the ID
    //container us an HTML element, it is a div in this case
    //set the content of element
    container.innerHTML = "<p>This is the container place</p>";
    //Change the color style to red
    container.style.color = "red";
    //add the new element p into the page
    document.write("<p>This is new paragraph</p>");

    //Declare a variable to hold the header
    let header = document.getElementsByTagName("h1")[0];

    //Declare a variable to hold the footer
    let footer = document.getElementsByTagName("h1")[1];

    //declare a variable to hold button element
    let btnClickMe = document.getElementById("btnClickMe");

    btnClickMe.onclick = function() {
        //window.alert("hello");
        header.style.color = "red";
        footer.style.color = "blue";

        container.style.visibility = "hidden"
    }
    //handle the 'mouse over event' the header
    header.onmouseover = function(){
        header.style.color = "red";
    }
    header.onmouseout = function(){
        header.style.color = "black";
    }

    //Declare a varibale to work on the text input username
    let username = document.getElementById("username");
    username.onchange = function(){
        container.innerText = username.value;
    }
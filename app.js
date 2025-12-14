console.log("Js Running")

let fullanme = document.getElementById("fullname")
let email = document.getElementById("email")
let pass = document.getElementById("password")
let repass = document.getElementById("re-password")


function sweetAlert2(message) {
    Swal.fire({
        icon: `error`,
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">${message}!</a>`
    });
}

function submitBtn(e) {
    e.preventDefault()
    // console.log("Ma chal rha" , e)

    if (fullanme.value.trim() == "") {
        sweetAlert2("Plase enter You Full Name")
    }

    if (email.value.trim() == "") {
        sweetAlert2("Plase enter You E-mail")
    }

    if (pass.value.trim() == "") {
        sweetAlert2("Please Enter a Password!")
    }

    if (pass.value.lenght <= 7) {
        sweetAlert2("Please Enter at least 8 Characters.")
    }

    if(pass != repass){
        sweetAlert2("Please Enter The Same Password")
    }

    
}
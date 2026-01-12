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
        return
    }

    if (email.value.trim() == "") {
        sweetAlert2("Plase enter You E-mail")
        return
    }

    if (pass.value.trim() == "") {
        sweetAlert2("Please Enter a Password!")
        return
    }

    if (pass.value.length <= 8) {
        sweetAlert2("Please Enter at least 8 Characters.")
        return
    }

    if(pass.value !== repass.value){
        sweetAlert2("Please Enter The Same Password")
        return
    }

    Swal.fire({
        title: "Congratulations!",
        icon: "success",
        draggable: true
    });
        
    setTimeout(function () {
        window.location.href = "./dashboard/dashboard.html"
    }, 2000)
}
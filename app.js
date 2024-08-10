const passwordSection = document.getElementById("passsection");
const passEye = document.getElementById("passeye");
const passInput = document.getElementById("password");

passEye.addEventListener("click", () => {
    if(passEye.classList[0] === "ri-eye-off-line"){
        passEye.classList.remove("ri-eye-off-line")
        passEye.classList.add("ri-eye-line")
        passInput.type = "text";

    }else{  
        passEye.classList.remove("ri-eye-line")
        passEye.classList.add("ri-eye-off-line")
        passInput.type = "password";
    }
})


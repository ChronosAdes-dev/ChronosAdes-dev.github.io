
function redirectTicket() {
    window.location.href = "views/buy_tickets.html";
}

function removeClasses(object, color) {
    object.classList.remove("cardHover");
    object.classList.remove(color);
}

function addClasses(object, color) {
    object.classList.add("cardHover");
    object.classList.add(color);
}

function onchangeCategory() {
    let valor = document.getElementById('categoria').value;
    let estudiante = document.getElementById('Estudiante');
    let trainee = document.getElementById('Trainee')
    let junior = document.getElementById('Junior');
    if (valor == 'Estudiante') {
        addClasses(estudiante, "azulFuerte")
        removeClasses(trainee, "azulClaro");
        removeClasses(junior, "amarillo");
    } else if (valor == 'Trainee') {
        addClasses(trainee, "azulClaro")
        removeClasses(junior, "amarillo");
        removeClasses(estudiante, "azulFuerte");
    } else {
        addClasses(junior, "amarillo")
        removeClasses(estudiante, "azulFuerte");
        removeClasses(trainee, "azulClaro");
    }
}

function validate(e) {
    e.preventDefault();
    let fields = document.getElementsByClassName('fields');
    let form = document.getElementById('formFinal');
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value.trim().length == 0 || (fields[i].id == "cantidad" && fields[i].value == 0)) {
            Swal.fire({
                icon: 'warning',
                position: 'top-end',
                title: fields[i].id,
                text: 'Field Required',
                showConfirmButton: false,
                timer: 1500
            }).then((res) => {
                form.classList.add("was-validated");            
            });
            return false;
        }
    }
    form.classList.add("was-validated");
    return true;
}

function resumen(e) {
   let result = validate(e);
   if(result){
    let valor = document.getElementById('categoria').value;
    let quantity = document.getElementById('cantidad').value;
    let result = 200 * quantity;
    let total = document.getElementById('total');
        if(valor == "Estudiante"){
            total.value = "Total a Pagar: $" + Number(result - (result * 0.80));
        }else if(valor == "Trainee"){
            total.value = "Total a Pagar: $" + Number(result - (result * 0.50));
        }else{
            total.value = "Total a Pagar: $" + Number(result - (result * 0.15));
        }
   }
}

function cleanForm() {
    document.getElementById('Nombre').value = "";
    document.getElementById('Apellido').value = "";
    document.getElementById('Correo').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('categoria').value = "Estudiante";
    document.getElementById('total').value = "Total a Pagar: $";

    onchangeCategory();
    let form = document.getElementById('formFinal');
    form.classList.remove("was-validated");   
}
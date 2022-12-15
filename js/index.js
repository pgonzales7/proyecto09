class empleado {
    codigo = prompt("ingrese codigo")
    nombre = prompt("Ingrese Nombre")
    apellido = prompt("Ingrese Apellido")
    correo = prompt("Ingrese Correo")
    cargo  = prompt("Ingrese Cargo")


    sueldoNeto(){
        if(this.cargo == "Jefe"){
            return 5000
        }
        if(this.cargo == "Analista"){
            return 4000
        }
        if(this.cargo == "Programador"){
            return 3000
        }
        if(this.cargo == "Soporte"){
            return 2000;
        }
        if(this.cargo == "Asistente"){
            return 1500
        }
    }
    descuento(){
        let desc = this.sueldoNeto() * 0.125;
        return desc;
    }
    sueldoBruto(){
        let sB = this.sueldoNeto() + this.descuento();
        alert("Tu sueldo es: " + sB + "soles");
    }
}


let empleado1 = new empleado()

console.log(empleado1)
empleado1.sueldoNeto();
empleado1.descuento();
empleado1.sueldoBruto();
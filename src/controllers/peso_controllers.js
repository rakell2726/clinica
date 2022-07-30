const peso_controllers = {};
let pesoinit = []; 
let pesointer = []; 
let pesofin = []; 
let estado="";


let response={}

peso_controllers.pesoObtenidos = (req,res)=>{
    let array_pacientes= req.body.pacientes
    
    for (let i = 0; i < array_pacientes.length; i++) {
        const paciente = array_pacientes[i];

        //calcular Cuanto peso ha ganado o perdido cada paciente con respecto al peso inicial.
        let pesoActual = (paciente.pesoinit-paciente.pesofin)
        let objPaciente ={}
        objPaciente['nombre'] = paciente.nombre;
        objPaciente['peso'] = pesoActual;
        

       //pacientes perdieron peso entre la pesada inicial y la pesada intermedia
       let pesoA = (paciente.pesoinit-paciente.pesointer)
       let objPacientes={}
       objPaciente['nombre'] = paciente.nombre;
       objPaciente['peso'] = pesoA;
       //cuantos pacientes alcanzaron su objetivo
       let pesoestado = (pacie)
       let obj_estado={}
       obj_estado['nombre'] = paciente.nombre;
       objPaciente['peso'] = pesoestado;
       }

    }

    response['pesoactual'] = 
   

    res.json(response);


module.exports = peso_controllers
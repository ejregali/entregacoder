
    let score = 0; // Declaro variable inicial de resultado final
    let nuevaConsulta;

    while (nuevaConsulta != "no"){
        
        alert("Bienvenido Dr/Dra 👨🏻‍⚕️👩🏻‍⚕️!! \n\n👉🏻Esta es una aplicacion para determinar la probabilidad que tu paciente tenga apendicitis. \n\n✳️A continuacion te hare un serie de preguntas sobre tu paciente.\n\n❓ Continuamos?");

        pregunta("1️⃣ ¿Tu paciente tiene cronologia de Murphy (Migracion del dolor de epigastrio a FID)? 😨",1);

        pregunta("2️⃣ ¿Te refiere el paciente anorexia o falta de apetito? 🤐", 1)

        pregunta("3️⃣ ¿Tuvo nauseas 🤮 o vomitos 🤮?", 1);

        pregunta("4️⃣ ¿Tiene dolor en fosa iliaca derecha? 🥺", 2);

        pregunta("5️⃣ ¿Tiene defensa y reaccion peritoneal? 🫨", 1);

        pregunta("6️⃣ ¿Tiene o tuvo fiebre? 🤒", 1);

        pregunta("7️⃣ ¿Tiene leucocitosis (Globulos blancos > a 11000) 🧪?" , 2);

        pregunta("8️⃣ ¿Tienen en la formula leucocitaria desviacion a la izquierda de neutrofilos? 🧪", 1);
        
        comparacion();

        nuevaConsulta = prompt("💬 ¿Quieres realizar una nueva consulta? Si o No");
    }

/* Funciones */

/* Funcion de pregunta y suma de puntos */

function pregunta (string,int){

    let variable = prompt(string);

    /* Control de respuesta boolean */

    while ((variable.toUpperCase() != "SI") && (variable.toUpperCase() != "NO")){
        alert("❌ Respuesta incorrecta!. Ingrese SI o NO");
        variable = prompt(string);
    }   

    if(variable.toUpperCase() == "SI"){
        score += int
        console.log(`Sumamos ${int} punto al score, tu score actual es ${score}`);
    }else {
    console.log("No suma puntos");
    }
    
}

/* Funcion de comparacion del score total y la tabla */

function comparacion(){
    if (score <= 4){
        alert(`Es Score de Alvarado para este paciente es ${score}, significa que tiene \n\n🟢 BAJA PROBABILIDAD DE APENDICITIS`);
    }else if (score <= 6){
        alert(`Es Score de Alvarado para este paciente es ${score}, significa que tiene \n\n🟡 HALLAZGOS CONSISTENTES CON APENDICITIS, PERO NO DIAGNOSTICA`);
    }else if (score <= 8){
        alert(`Es Score de Alvarado para este paciente es ${score}, significa que tiene \n\n🟠ALTA PROBABILIDAD DE APENDICITIS`);
    }else if (score <= 10){
        alert(`Es Score de Alvarado para este paciente es ${score}, significa que tiene \n\n🔴 CASI CERTEZA DE APENDICITIS`);
    }
}









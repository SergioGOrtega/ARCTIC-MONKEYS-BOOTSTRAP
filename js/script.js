/*****************************************************************************/
/*              JavaScript de index.html                                     */
/*              Autor: Sergio Gámez Ortega                                   */
/*              Version: 1.0                                                 */
/*              Fecha: Enero de 2024                                         */
/*              Comentario: Proyecto de Lenguaje de Marcas (BOOTSTRAP)       */
/*****************************************************************************/

function validation() {

    let correct = true;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if((firstName == "") || (/^\s+$/.test(firstName)) || (/[0-9]/.test(firstName)) || (!/[a-zñ]{2,}/i.test(firstName))) {
        document.getElementById('firstNameHelp').style.display="block";
        correct = false;
    }

    if((lastName == "") || (/^\s+$/.test(lastName)) || (!/[a-zñ]{2,}/i.test(lastName))) {
        document.getElementById('lastNameHelp').style.display="block";
        correct = false;
    }

    if((email == "") || (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
        document.getElementById('emailHelp').style.display="block";
        correct = false;
    }

    if((password == "") || (!/[A-ZÑ]+/.test(password)) || (!/[a-zñ]+/.test(password)) || (!/[0-9]+/.test(password)) || (!/[.:,;+-_&%$€¡!¿?·#"@|ºª¬/()='^*`  ]+/.test(password))) {
        document.getElementById('passwordHelp').style.display="block";
        correct = false;
    }

    return correct;

}

function resetear(id) {
    document.getElementById(id).style.display="none";
}
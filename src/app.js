import {LightningElement} from "lwc";

export default class App extends LightningElement{

//criar variaveis e atributos.

nome = "Cleide Marsola";
telefone = "11900000000";
cpf = "000.111.222-23";
idade = 30;
email= "dev.squar@gmail.com";
instagram = "https://www.instagram.com";
linkedIn = "https://www.linkedin.com/";

visible = true;

trocarDiv(){
this.visible = !this.visible;
}

}
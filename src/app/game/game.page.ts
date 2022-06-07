import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  Cartas:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Bandera",src:"../assets/resorces/cartas/bandera 2de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 2 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 2 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 2 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 2 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 2 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"quetzal",src:"../assets/resorces/cartas/quetzal 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"quetzal",src:"../assets/resorces/cartas/quetzal 2 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"tecun human",src:"../assets/resorces/cartas/tecun human 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"tecun human",src:"../assets/resorces/cartas/tecun human 2 de 2.png",visible:false,Adivinado:false,levantada:false},
            ];
  Aciertos:number=0;
  Intentos:number=0;
  carta1:string = "";
  carta2:string = "";
  position1:number=0;
  position2:number=0;

  constructor(
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.messageStart();
    
  }

  async  messageStart() {
    const alert = await this.alertController.create({
      header: 'Iniciar Juego',
      message: 'Desea Iniciar ',
      buttons: [
         {
          text: 'Si',
          handler: () => {
            this.revolver();
          }
        }
      ]
    });

    await alert.present();
  }

  revolver(){
    
    
    for (var a = 0; a < this.Cartas.length; a++) {
      var x = this.Cartas[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.Cartas[a] = this.Cartas[y];
      this.Cartas[y] = x;
  }
  

    
  }
  verifica(item,position){
    debugger
    item.visible = !item.visible;
    
    let cartalevantas = this.Cartas.filter( carta => carta.visible === true );
    
    
     if(cartalevantas.length == 2){
      
      let cartaVisible = this.Cartas.find( carta => carta.src === cartalevantas[0].src );
      let cartaVisible2 = this.Cartas.find( carta => carta.src === cartalevantas[1].src );
      if(cartalevantas[0].Text === cartalevantas[1].Text){
        this.Aciertos += 1;
        
        debugger
        cartalevantas[0].Adivinado = true
        cartalevantas[1].Adivinado = true
        cartalevantas[0].visible = false
        cartalevantas[1].visible = false

        
         cartalevantas = "";
      }else{
        
        this.Intentos += 1;
        setTimeout(()=>{  
        cartalevantas[0].visible = false
        cartalevantas[1].visible = false
         cartalevantas = "";
        
         
         /* cartalevantas[0].visible = false
        cartalevantas[1].visible = false */
      }, 3000);
      }
    } 
    
   /*  if(this.carta1 == ""){
      this.position1 = position;
      this.carta1= item.Text;
      }
    if(this.carta2 == ""){
      this.carta2= item.Text;
      this.position2 = position;
      
    }
    if(this.carta1 == "" && this.carta2 == ""){

        
    }else{
      if(this.carta1 == this.carta2){
        this.Aciertos += 1;
        this.carta1 = "";
        this.carta2 = "";
        this.Cartas[this.position1].Adivinado = true;
        this.Cartas[this.position2].Adivinado = true;
        this.position2 = 0
        this.position2 = 0;
      }else{
        


      } */
   /*  }
 */
  }

}

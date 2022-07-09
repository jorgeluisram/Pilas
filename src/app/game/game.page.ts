import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  // 500 900 la resolucion de las imagenes
  Cartas:any=[];
  CartasOriginal:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"quetzal",src:"../assets/resorces/cartas/quetzal 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"tecun human",src:"../assets/resorces/cartas/tecun human 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"quetzal",src:"../assets/resorces/cartas/quetzal 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"tecun human",src:"../assets/resorces/cartas/tecun human 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            ];
            Cartaslv1:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            ];
            Cartaslv2:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
            ];
            Cartaslv3:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            ];
            Cartaslv4:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
           ];
           Cartaslv5:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              ];
              Cartaslv6:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"quetzal",src:"../assets/resorces/cartas/quetzal 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"quetzal",src:"../assets/resorces/cartas/quetzal 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              
            ];
            Cartaslv7:any=[{Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"quetzal",src:"../assets/resorces/cartas/quetzal 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"tecun human",src:"../assets/resorces/cartas/tecun human 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Bandera",src:"../assets/resorces/cartas/bandera 1de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Ceiba",src:"../assets/resorces/cartas/ceiba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Escudo",src:"../assets/resorces/cartas/escudo 1 de 1.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Marimba",src:"../assets/resorces/cartas/marimba 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"Monja blanca",src:"../assets/resorces/cartas/monja blanca 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"numero 100",src:"../assets/resorces/cartas/numero 100 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"quetzal",src:"../assets/resorces/cartas/quetzal 1 de 2.png",visible:false,Adivinado:false,levantada:false},
              {Text:"tecun human",src:"../assets/resorces/cartas/tecun human 1 de 2.png",visible:false,Adivinado:false,levantada:false},
            ];
            
  nivel:number=0;
  Aciertos:number=0;
  Intentos:number=0;
  carta1:string = "";
  carta2:string = "";
  position1:number=0;
  position2:number=0;
  text: string='Flamenco'
  imgurl:string= 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg'
  link: string='https://link.medium.com/JA4amAHFJ5'
  intentosLevel1: boolean = false
  intentosLevel2: boolean = false
  intentosLevel3: boolean = false
  intentosLevel4: boolean = false
  intentosLevel5: boolean = false
  intentosLevel6: boolean = false
  intentosLevel7: boolean = false

  constructor(
    public alertController: AlertController,
    private router: Router,
    public toastController: ToastController,
    private clipboard: Clipboard,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    //this.share(this.Aciertos);
    
    document.body.setAttribute('data-theme', 'dark');
     /* this.messageStart();  */
  }
  ionViewWillEnter() {
    //se ejecutara cada vez que entremos a la pagina
    this.messageStart(); 
  }
  /* ionViewWillLeave() {
    alert('6 - ¿Estás seguro que quieres dejar la página?.');
  } */
  async  gameFinished2(Aciertos) {
    this.toastController.create({
      header: 'Fin del juego!',
      message: 'Aciertos '+ Aciertos,
      position: 'middle',
      cssClass: 'toast-custom-class',
      buttons: [
        {
          side: 'end',
          icon: 'person',
          handler: () => {
            console.log('');
          }
        }, 
        {
          side: 'end',
          text: 'Compartir',
          handler: () => {
            this.share(Aciertos);
          }
        },
        {
          side: 'end',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('');
            this.router.navigate(['/home'])
          },
          
        },
      ]
    }).then((toast) => {
      toast.present();
    });
  }
  async  share(Aciertos) {
    const alert = await this.alertController.create({
      header: 'toma captura de la pantalla y copia el texto para compartirlo!',
      message: 'Hey! este es mi punteo  '+ Aciertos + '\n Visita la pagina https://pilasguatemala.com/',
      buttons: [
        {
          text: 'Salir',
          handler: () => {
            this.router.navigate(['/home'])
          }
        },
         {
          text: 'Listo!',
          handler: () => {
            this.clipboard.copy('Hey! este es mi punteo  '+ Aciertos + 'Visita la pagina https://pilasguatemala.com/');
            this.MensajeCopiado();
          }
        }
      ]
    });

    await alert.present();
  }
  async  gameFinished(Aciertos) {
    
    const alert = await this.alertController.create({
      header: 'Fin del juego',
      message: 'Aciertos '+ Aciertos,
      buttons: [
        {
          text: 'Salir',
          handler: () => {
            this.router.navigate(['/home'])
          }
        },
         {
          text: 'FB',
          handler: () => {
            //this.ShareFacebook();
          }
        }
      ]
    });

    await alert.present();
  }
  
  

  async  messageStart() {
    const alert = await this.alertController.create({
      header: 'Iniciar Juego',
      message: 'Desea Iniciar ',
      buttons: [
         {
          text: 'Si',
          handler: () => {
            this.revolverlevel1();
            
            //this.ShareFacebook();
          }
        }
      ]
    });

    await alert.present();
  }
  revolverlevel1(){
    //agregar intentos la mitad de las cartas
    this.nivel= 1;
    this.intentosLevel1 = true;
    this.mostrarcarta(this.Cartaslv1)
    for (var a = 0; a < this.Cartaslv1.length; a++) {
      var x = this.Cartaslv1[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.Cartaslv1[a] = this.Cartaslv1[y];
      this.Cartaslv1[y] = x;
    }
    this.Cartas = this.Cartaslv1
  }
  revolverlevel2(){
    this.nivel= 2;
    this.Intentos= 0;
    this.intentosLevel1 = false;
    this.intentosLevel2 = true;
    this.mostrarcarta(this.Cartaslv2)
    for (var a = 0; a < this.Cartaslv2.length; a++) {
      var x = this.Cartaslv2[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.Cartaslv2[a] = this.Cartaslv2[y];
      this.Cartaslv2[y] = x;
    }
    this.Cartas = this.Cartaslv2
  }
  revolverlevel3(){
    this.nivel= 3;
    this.Intentos= 0;
    this.intentosLevel2 = false;
    this.intentosLevel3 = true;
    this.mostrarcarta(this.Cartaslv3)
    for (var a = 0; a < this.Cartaslv3.length; a++) {
      var x = this.Cartaslv3[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.Cartaslv3[a] = this.Cartaslv3[y];
      this.Cartaslv3[y] = x;
    }
    this.Cartas = this.Cartaslv3
  }
  revolverlevel4(){
    this.nivel= 4;
    this.Intentos= 0;
    this.intentosLevel3 = false;
    this.intentosLevel4 = true;
    this.mostrarcarta(this.Cartaslv4)
    for (var a = 0; a < this.Cartaslv4.length; a++) {
      var x = this.Cartaslv4[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.Cartaslv4[a] = this.Cartaslv4[y];
      this.Cartaslv4[y] = x;
    }
    this.Cartas = this.Cartaslv4
  }
  revolverlevel5(){
    this.nivel= 5;
    this.Intentos= 0;
    this.intentosLevel4 = false;
    this.intentosLevel5 = true;
    this.mostrarcarta(this.Cartaslv5)
    for (var a = 0; a < this.Cartaslv5.length; a++) {
      var x = this.Cartaslv5[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.Cartaslv5[a] = this.Cartaslv5[y];
      this.Cartaslv5[y] = x;
    }
    this.Cartas = this.Cartaslv5
  }
  revolverlevel6(){
    this.nivel= 6;
    this.Intentos= 0;
    this.intentosLevel5 = false;
    this.intentosLevel6 = true;
    this.mostrarcarta(this.Cartaslv6)
    for (var a = 0; a < this.Cartaslv6.length; a++) {
      var x = this.Cartaslv6[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.Cartaslv6[a] = this.Cartaslv6[y];
      this.Cartaslv6[y] = x;
    }
    this.Cartas = this.Cartaslv6
  }
  revolverlevel7(){
    this.nivel= 7;
    this.Intentos= 0;
    this.intentosLevel6 = false;
    this.intentosLevel7 = true;
    this.mostrarcarta(this.Cartaslv7)
    for (var a = 0; a < this.Cartaslv7.length; a++) {
      var x = this.Cartaslv7[a];
      var y = Math.floor(Math.random() * (a + 1));
      this.Cartaslv7[a] = this.Cartaslv7[y];
      this.Cartaslv7[y] = x;
    }
    this.Cartas = this.Cartaslv7
  }
  mostrarcarta(array){
    array.forEach(element => {
      element.visible = true;
    });
    setTimeout(function(){
      array.forEach(element => {
        element.visible = false;
      });
  }, 1000);
 


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
    item.visible = !item.visible;
    let cartalevantas = this.Cartas.filter( carta => carta.visible === true );
     if(cartalevantas.length == 2){
      
      let cartaVisible = this.Cartas.find( carta => carta.src === cartalevantas[0].src );
      let cartaVisible2 = this.Cartas.find( carta => carta.src === cartalevantas[1].src );
      if(cartalevantas[0].Text === cartalevantas[1].Text){
        this.showLoading();
        this.Aciertos += 1;
        cartalevantas[0].Adivinado = true
        cartalevantas[1].Adivinado = true
        cartalevantas[0].visible = false
        cartalevantas[1].visible = false
        cartalevantas = "";
        
        if(this.Aciertos == 2){
          
          this.revolverlevel2();
        }
        if(this.Aciertos == 5){
          
          this.revolverlevel3();
        }
        if(this.Aciertos == 9){
          
          this.revolverlevel4();
        }
        if(this.Aciertos == 14){
          
          this.revolverlevel5();
        }
        if(this.Aciertos == 20){
          
          this.revolverlevel6();
        }
        if(this.Aciertos == 27){
          
          this.revolverlevel7();
        }
        if(this.Aciertos == 35){
          
          this.gameFinished2(this.Aciertos);
        }
        /* if(this.Aciertos == 8){
          this.gameFinished2(this.Aciertos);
        } */
      }else{
        this.Intentos += 1;
        this.showLoading();
        setTimeout(()=>{  
        cartalevantas[0].visible = false
        cartalevantas[1].visible = false
        cartalevantas = "";
        if(this.intentosLevel1){
          if(this.Intentos == 2){
            this.gameFinished2(this.Aciertos);
          }
        }  
        if(this.intentosLevel2){
          if(this.Intentos == 3){
            this.gameFinished2(this.Aciertos);
          }
        }
        if(this.intentosLevel3){
          if(this.Intentos == 4){
            this.gameFinished2(this.Aciertos);
          }
        }
        if(this.intentosLevel4){
          if(this.Intentos == 5){
            this.gameFinished2(this.Aciertos);
          }
        }
        if(this.intentosLevel5){
          if(this.Intentos == 6){
            this.gameFinished2(this.Aciertos);
          }
        }
        if(this.intentosLevel6){
          if(this.Intentos == 7){
            this.gameFinished2(this.Aciertos);
          }
        }
        if(this.intentosLevel7){
          if(this.Intentos == 8){
            this.gameFinished2(this.Aciertos);
          }
        }
        /* if(this.Intentos == 5){
          this.gameFinished2(this.Aciertos);
        } */
         
         /* cartalevantas[0].visible = false
        cartalevantas[1].visible = false */
      }, 1000);
      }
    } 
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: '',
      duration: 1500
    });
    loading.present();
  }
  async MensajeCopiado() {
    const toast = await this.toastController.create({
      message: 'Mensaje Copiado',
      duration: 2000,
      color:'primary'
    });
    toast.present();
  }

}

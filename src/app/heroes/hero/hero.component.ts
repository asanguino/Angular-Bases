import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string= "ironman";
  public age: number= 50;

  //es una propiedad más de la clase
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  changeName():void{
    this.name = "Spiderman";
  }
  changeAge():void{
    this.age=45;
  }
  reset():void{
    this.age=50;
  this.name='ironman';

//  document.querySelectorAll('h1').forEach( element =>{
//       element.innerHTML = '<h1>Desde angular</h1>';
//     })

  }
}

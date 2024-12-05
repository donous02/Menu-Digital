import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MealdbApiService } from '../../services/mealdb-api.service';

@Component({
  selector: 'app-filtro-aleatorio',
  standalone: true,
  imports: [],
  templateUrl: './filtro-aleatorio.component.html',
  styleUrl: './filtro-aleatorio.component.css'
})
export class FiltroAleatorioComponent implements OnInit {

  ngOnInit(): void {
    this.getMeals()
  }

  


  getNameMeal:any=[];
  getImg:any=[];
  getMealArea:any=[];
  getMealPrep:any=[];
  getCategory:any=[];

  @ViewChild('infoMeal') infoMeal!:ElementRef;
  @ViewChild('imgContent') imgContent!:ElementRef;


  ///////ANIMACIONES 
  animationTask(){
    this.infoMeal.nativeElement.classList.add('applyAnimation')
    setTimeout(()=>{
    this.infoMeal.nativeElement.classList.remove('applyAnimation')
    },1500)

    this.imgContent.nativeElement.classList.add('applyAnimation2')
    setTimeout(()=>{
    this.imgContent.nativeElement.classList.remove('applyAnimation2')
    },2500)
  }



///////////////////////////////SCROLLS
  // Scroll hacia la derecha
  counter=0;
  increaseCounter(){
    this.counter++;
    if (this.counter>this.getImg.length-1) {
      this.counter=0;
    }
    this.animationTask();
  }


  // Scroll hacia la izquierda
  decreaseCounter(){

    if (this.counter<=0) {
      this.counter=this.getImg.length-1;
    }else{
    this.counter--;
    this.animationTask();

    }
  }
///////////////////////////Fin de Scrolls

constructor(private service:MealdbApiService){}

  @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>

  async getMeals() {
    this.getNameMeal=[]
    this.getImg=[];
    this.getMealArea=[]
    this.getMealPrep=[]
    this.getCategory=[]

    const searchMeal = this.searchInput.nativeElement.value.trim();



      this.service.getrandomPetition().subscribe((data) =>{
       console.log(data);
      })
    
  }
}

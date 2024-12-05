import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MealdbApiService } from '../../services/mealdb-api.service';
import { HttpClientModule } from '@angular/common/http';
import { count } from 'rxjs';

@Component({
  selector: 'app-filtropor-nombre',
  standalone: true,
  imports: [],
  templateUrl: './filtropor-nombre.component.html',
  styleUrl: './filtropor-nombre.component.css'
})
export class FiltroporNombreComponent {


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

  @HostListener('document:keydown', ['$event'])
handleKeyDown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    event.preventDefault();
    window.location.reload()
  }}

    @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>

    async getMeals() {
      this.getNameMeal=[]
      this.getImg=[];
      this.getMealArea=[]
      this.getMealPrep=[]
      this.getCategory=[]

      const searchMeal = this.searchInput.nativeElement.value.trim();



      if(searchMeal){ 
        this.service.getnamePetition(searchMeal).subscribe((data) =>{
          for (let i = 0; i < Object.values(data)[0].length; i++) {
            this.getNameMeal.push(Object.values(data)[0][i].strMeal);
            this.getImg.push(Object.values(data)[0][i].strMealThumb);
            this.getMealArea.push(Object.values(data)[0][i].strArea);
            this.getMealPrep.push(Object.values(data)[0][i].strInstructions);
            this.getCategory.push(Object.values(data)[0][i].strCategory);
          }
          
  
         console.log(this.getNameMeal);
        })
      }
      
    }



}

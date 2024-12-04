import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class FiltroporNombreComponent implements OnInit {
    constructor(private service:MealdbApiService){}


    getNameMeal:any=[];
    getImg:any=[];
    getMealArea:any=[];
    getMealPrep:any=[];
    getCategory:any=[];

    @ViewChild('infoMeal') infoMeal!:ElementRef;
    @ViewChild('imgContent') imgContent!:ElementRef;

    animationTask(){
      this.infoMeal.nativeElement.classList.add('applyAnimation')
      setTimeout(()=>{
      this.infoMeal.nativeElement.classList.remove('applyAnimation')
      },1200)

      this.imgContent.nativeElement.classList.add('applyAnimation2')
      setTimeout(()=>{
      this.imgContent.nativeElement.classList.remove('applyAnimation2')
      },2200)
    }

  counter=0;

    filtro(){

    }

    ngOnInit() {
      this.getMeals();
    }

    increaseCounter(){
      this.counter++;
      if (this.counter>this.getImg.length-1) {
        this.counter=0;
      }
      this.animationTask();
    }

    decreaseCounter(){

      if (this.counter<=0) {
        this.counter=this.getImg.length-1;
      }else{
      this.counter--;
      this.animationTask();

      }
    }

    async getMeals() {
      this.service.getnamePetition().subscribe((data) =>{
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

import { Component, OnInit } from '@angular/core';
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

  counter=0;

    filtro(){

    }

    ngOnInit() {
      this.getMeals();
    }

    async getMeals() {
      this.service.getnamePetition().subscribe((data) =>{
        for (let i = 0; i < Object.values(data)[0].length; i++) {
          this.getNameMeal.push(Object.values(data)[0][i].strMeal);
          this.getImg.push(Object.values(data)[0][i].strMealThumb);
          this.getMealArea.push(Object.values(data)[0][i].strArea);
        
        
        }
        
       console.log(this.getNameMeal);
    
      })
    }

}

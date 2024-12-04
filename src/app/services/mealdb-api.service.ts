import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealdbApiService {

  urlnamePetition = 'https://themealdb.com/api/json/v1/1/search.php?s=chicken'; 
  urlletterPetition = 'https://themealdb.com/api/json/v1/1/search.php?f=a';
  urlrandomPetition = 'https://themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) { }

  getnamePetition(){ 
    return this.http.get(this.urlnamePetition);
  }
}

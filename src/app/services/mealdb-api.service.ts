import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealdbApiService {

  urlnamePetition = 'https://themealdb.com/api/json/v1/1/search.php?s='; 
  urlletterPetition = 'https://themealdb.com/api/json/v1/1/search.php?f=';
  urlrandomPetition = 'https://themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) { }

  getnamePetition(query:string){ 
    const url = `${this.urlnamePetition}${query}`; // Construcción dinámica de la URL
    return this.http.get(url);
  }
  getletterPetition(query:string){ 
    const url = `${this.urlletterPetition}${query}`; // Construcción dinámica de la URL
    return this.http.get(url);
  }

  getrandomPetition(){ 
    return this.http.get(this.urlrandomPetition);
  }
}

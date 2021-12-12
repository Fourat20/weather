import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  obj
  temp
  tempD
  constructor(public httpClient: HttpClient,) { }

  GetCurrrentTempreaturePerHour(latitude,longitude) {
    let exclude="daily"
    let url= "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&exclude="+exclude+"&appid=3e2b6a06e8198a835903cd7ae339faf5";
    this.httpClient.get(url).subscribe((temperature)=>{
      this.obj=<any>temperature
      this.temp=this.obj.hourly
      console.log( this.obj.hourly);
      // console.log(((parseFloat( this.obj.current.temp)-273.15).toFixed(2))+"°C");

      // this.icon= "http://openweathermap.org/img/w/"+ this.obj.current.weather[0].icon+".png";
      // this.temperature= ((parseFloat( this.obj.current.temp)-273.15).toFixed(2))+"°C"
      // this.humidity=this.obj.current.humidity

    })
  }
  GetCurrrentTempreaturePerDay(latitude,longitude) {
    let exclude="alerts"
    let url= "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&exclude="+exclude+"&appid=3e2b6a06e8198a835903cd7ae339faf5";
    this.httpClient.get(url).subscribe((temperature)=>{
      
      this.obj=<any>temperature
      this.tempD=this.obj.hourly
      console.log( this.obj.hourly);
      console.log(((parseFloat( this.obj.current.temp)-273.15).toFixed(2))+"°C");
      

      console.log(this.tempD);
      
    })
  }
}

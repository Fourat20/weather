import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
city
temperature
time
icon
humidity
  constructor(private weatherService:WeatherService) {
  
  }
  ngOnInit() {
    this.goRIO()
  }
  goRIO(){
    this.city="rio"

    if(this.city=='rio'){
      this.weatherService.GetCurrrentTempreaturePerHour(-22.9068467,-43.1728965)
     
      if(this.weatherService.temp){
        this.weatherService.temp.forEach(element => {
          this.temperature=((parseFloat( element.temp)-273.15).toFixed(2))+"°C"
          this.icon="http://openweathermap.org/img/w/"+ element.weather[0].icon+".png";
          this.humidity=element.humidity+"%"
          this.time=element.dt
          console.log(  this.time);
            });
      }
    }
  }
  goBEIJING(){
    this.city="beijing"
    this.weatherService.GetCurrrentTempreaturePerHour(39.916668,116.383331)
  
    this.weatherService.temp.forEach(element => {
      this.temperature=((parseFloat( element.temp)-273.15).toFixed(2))+"°C"
      this.icon="http://openweathermap.org/img/w/"+ element.weather[0].icon+".png";
      this.humidity=element.humidity+"%"
      this.time=element.dt
      console.log(  this.temperature);
        });
  }
  goLOS(){
    this.city="los"
    this.weatherService.GetCurrrentTempreaturePerHour(34.052234,-118.243685)
    this.weatherService.temp.forEach(element => {
    this.temperature=((parseFloat( element.temp)-273.15).toFixed(2))+"°C"
    this.icon="http://openweathermap.org/img/w/"+ element.weather[0].icon+".png";
    this.humidity=element.humidity+"%"
    this.time=element.dt
      console.log(  this.temperature);
        });
  }

}

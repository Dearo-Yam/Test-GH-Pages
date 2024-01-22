import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asker';
  selectedPlace =''
  foodPlaces: object[] = [{'HAIDILAO':'https://www.yelp.com/biz/haidilao-hot-pot-arcadia-arcadia?osq=Haidilao'},
   {'Thirsty Cow':'https://www.yelp.com/biz/thirsty-cow-korean-bbq-city-of-industry?osq=Thirsty+Cow+Kbbq'},
    {'Gyu-Kaku':'https://www.yelp.com/biz/gyu-kaku-japanese-bbq-pasadena-pasadena-2?osq=Gyu-Kaku+Japanese+Bbq'},
     {'Chubby Cattle':'https://www.yelp.com/biz/chubby-cattle-monterey-park-monterey-park-2'},
      {'YAMASHIRO':'https://www.yelp.com/biz/yamashiro-hollywood-hollywood'}];
  styles: object[] = [{'Suit':'assets/wedding-suit.png'},{'Business':'assets/polo-shirt.png'},{'Casual':'assets/hoodie.png'}]
  sendYes(){
    var hide = document.getElementById('panel');
    if(hide){
      hide.style.display = 'none'
      var show = document.getElementById('secondPhase')
      if(show){
        show.style.display = 'block'
      }
    }
  }
  handleHover() {
    var button = document.getElementById('NoBtn');
    if (button) {
      
      // Generate new random values for left and top positions
      const leftPosition = -Math.ceil(Math.random() * 500);
      const topPosition = -Math.ceil(Math.random() * 500);
  
      // Apply the new transform values with px units and add a transition effect
      button.style.transition = 'transform 0.3s ease'; // Adjust the duration and timing function as needed
      button.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;
      const txt = document.getElementById('display')
      if(txt){
        txt.style.display = 'block'
        setTimeout(function(){txt.style.display = 'none'},3000)
      }
      console.log('Hello, I am being hovered');
    }
  }
  displayText(){
    console.log('wow you clicked me')
  }
  sendPlaceConfirmation(place:string){
    this.selectedPlace = place
    const hide = document.getElementById('secondPhase')
    const show = document.getElementById('thirdPhase')
    if(hide && show){
      hide.style.display = 'none'
      show.style.display = 'block'
    }
  }
  openWindow(location:string){
    window.open(location,'_blank')
  }
}

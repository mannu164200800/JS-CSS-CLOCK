 //Welcome to my Drum-Kit//
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    
    function setDate(argument) {
      const now = new Date();
      

      const seconds = now.getSeconds();
      const secondDegrees = ((seconds/60)*360)+90;
      secondHand.style.transform = `rotate(${secondDegrees}deg)`;
      console.log(seconds);

      const minute = now.getMinutes();
      const minuteDegrees = ((minute/60)*360) + ((seconds/60)*6) + 90;
     minuteHand.style.transform =  `rotate(${minuteDegrees}deg)`;        
      const hour = now.getHours();
      const hourDegrees = ((hour/12)*360) + ((minute/60)*30)+90 ;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    setInterval(setDate,1000);

    setDate();
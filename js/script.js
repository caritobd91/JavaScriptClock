const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate(){
      const now = new Date();

      const seconds = now.getSeconds();
      //Turns seconds in degrees
      //Divides deconds by 60 to get percentage of total seconds. 
      //Then multiplies it by 360 degrees
      //adds 90 because rotation is originally set at 90deg in css
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      
      const mins = now.getMinutes();
      //60 minutes in 1 hour
      const minsDegrees = ((mins / 60) * 360) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getMinutes();
      //12 hours in a day
      const hourDegrees = ((mins / 12) * 360) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;


    }
    //Makes the variable setDate happen every second
    setInterval(setDate, 1000);
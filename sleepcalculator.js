function getSleepHours(day) {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday'){
    return 8;
  } else if (day === 'thursday'){
    return 8;
  }
  else if (day === 'friday'){
    return 8;
  }
  else if (day === 'saturday'){
    return 8;
  }
  else if (day === 'sunday'){
    return 8;
  }
};

function getActualSleepHours(){
 return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

//call the function
console.log(getActualSleepHours());

function getIdealSleepHours(){
  let idealHours = 7;
  return idealHours * 7;
};

//call the function
console.log(getIdealSleepHours());


function calculateSleepDebt (){
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (idealSleepHours === actualSleepHours){
  console.log( 'yeah, you got it! ');}
  else if (idealSleepHours >= actualSleepHours){
    console.log ('you need to sleep more');
  } else 
  {console.log('you sleep more than needed')}
  
  }

  calculateSleepDebt();


function CalculateTotalTime (currTime: string, timeToAdd: string) : string {
  const currTimeArray = currTime.split(':');
  const timeToAddArray = timeToAdd.split(':');

  let totalTimeArray: number [] = [];
  currTimeArray.forEach((el, i) => {
    totalTimeArray.push(parseInt(el) + parseInt(timeToAddArray[i]))
  });

  totalTimeArray.forEach((el, i) => {
    if(el >= 60) {
      if (totalTimeArray[i - 1]) {
        totalTimeArray[i - 1] += 1;
        totalTimeArray[i] -= 60;
      }
    }
  })
  let result: string[] = [];
  totalTimeArray.forEach(el => result.push(el.toString().padStart(2, '0')))
  return result.join(':');
}

export default CalculateTotalTime;
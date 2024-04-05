  //dates


  let myDate = new Date()
      // console.log(myDate.toString());
      // console.log(myDate.toDateString());
      // console.log(myDate.toLocaleString());

  // javascript m month 0 se start hote h 

  // console.log(typeof myDate);
  //let myCreateDate = new Date(2023, 0, 23, 5, 3)
  let myCreateDate = new Date("01-14-2023")
  console.log(myCreateDate.toLocaleString());

  let myTimeStamp = Date.now()

  // console.log(myTimeStamp);
  // console.log(myCreateDate.getTime());
  // console.log(Math.floor(Date.now() / 1000));
  let newDate = new Date()
  console.log(newDate);
  console.log(newDate.getDay());
  console.log(newDate.getMonth());

  newDate.toLocaleString('default', {
      weekday: "long"
  })
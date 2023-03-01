//Using Try Statement 



try {
    var x = "hello";
    x = x.toUpperCase(); 
    console.log(x);
    
    var y = 5 / 0; 
    console.log(y); 
  } catch (err) {
    console.log("An error occurred: " + err.message);
  } finally {
    console.log("This will always execute");
  }


  a = a+5
  console.log(a)
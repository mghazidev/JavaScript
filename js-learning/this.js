 const Object = {
     Property: "Hello, world!",
     Method() {
       console.log(this.Property);
     }
   };
  
  Object.Method()

  function method() {
    console.log(this.property);
  }

  const object = {
    property: "Hello World",
    method: method
  };
  object.method()


  //This automatically get the object bcz we called on.
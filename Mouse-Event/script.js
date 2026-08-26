document.addEventListener("mousemove", function(event) {

      
      let x = event.clientX;
      let y = event.clientY;

      
      document.getElementById("x").innerText = x;
      document.getElementById("y").innerText = y;

    });

    var random1 = Math.floor(Math.random()*6)+1;          //get value from 1 to 6
    var random2 = Math.floor(Math.random()*6)+1;
    
    var randomImageSrc1="images/dice"+random1+".png";
    var randomImageSrc2="images/dice"+random2+".png";

    document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc1);
    document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);
    
//replace innerHTML of h1 tag
    if (random1>random2){
      document.querySelector("h1").innerHTML="player 1 wins";
    }else if(random1<random2){
            document.querySelector("h1").innerHTML="player 2 wins";
    }else{
      document.querySelector("h1").innerHTML="draw";
    }
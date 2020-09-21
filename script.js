
  var score = {
    user:  0 ,
    cpu : 0
    }

  var userpick;
  var cpupick;
  var pup = document.getElementsByClassName('user-choice');

  var alloption =[
    {
      name: "rock" ,
    image : "assets/sasso.png"
  },
    {
      name: "paper" ,
     image : "assets/carta.png"
   },
    {
      name: "scissor" ,
     image :" assets/forbice.png"
   },
    {
      name: "lizard" ,
     image : "assets/lizard.png"
   },
    {
      name: "spock" ,
     image : "assets/spock.png"
   },
  ];

// generate cpu choice

function generatecpu (){
  cpupick = alloption [(Math.floor(Math.random()* alloption.length))];
}

//determinate who win

function checkwhowon(){

  if(userpick == cpupick.name){
    return "draw";
  } else
  {
    if(userpick == "rock"){
      if(cpupick.name== "scissor" || cpupick.name=="lizard"){

        return "You win";
      }else{

        return"You lose";
      }
     }
     else if(userpick=="paper"){
      if (cpupick.name=="rock" || cpupick.name== "spock"){

        return "You win";
      }else{

        return "You lose";
      }
     }
     else if(userpick=="scissor"){
      if(cpupick.name=="paper" || cpupick.name== "lizard"){

        return "You win";
      }else{

        return "You lose";
      }
     }
     else if (userpick == "lizard"){
      if (cpupick.name=="spock" || cpupick.name =="paper"){

        return "You win";
      }else{

        return "You lose";
      }
     }
     else if (userpick =="spock"){
      if (cpupick.name =="rock" || cpupick.name == "scissor"){

        return "You win";
      }else{
        return "You lose";
      }
    }
  }
}

// give point on win or lose
function pointgiver(){
  if(checkwhowon()=="You win"){
    score.user++;
  }
  if (checkwhowon()=="You lose"){
    score.cpu++;
  }
}


function onuserpick(){
    userpick = this.dataset.name ;
    generatecpu();
    checkwhowon();
    pointgiver();
    var cpupickimg = "<img src='"+cpupick.image+"' />";
    var cpupicktext = "<h3>Cpu chose "+cpupick.name+"</h3>";
    document.getElementById("computer-choice").innerHTML = cpupickimg + cpupicktext ;
    document.getElementById("player-score").innerHTML = score.user ;
    document.getElementById("cpu-score").innerHTML = score.cpu ;
    document.getElementById("result").innerHTML = checkwhowon();
}


for (var i =0; i<pup.length; i++){
  pup[i].addEventListener('click', onuserpick);
}

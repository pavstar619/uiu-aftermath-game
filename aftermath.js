function option1Func(){
    /* var scenex = scene(optionNum,sceneNum); 
    document.getElementById("option2").value = scenex[4]; 
    sceneNum++;
    optionNum+=2; */    
    document.getElementById("main_text").textContent = main_text[textNum];
    textNum++;
    document.getElementById("option1").value = option1[option1Num+1];
    //console.log(option1[option1Num]);
    option1Num++;

    document.getElementById("option2").value = option2[option2Num+1];
    //console.log(option2[option2Num]);
    option2Num++;
    
}

function option2Func(){
    /* var scenex = scene(optionNum,sceneNum); 
    document.getElementById("option2").value = scenex[4]; 
    sceneNum++;
    optionNum+=2; */    
    document.getElementById("main_text").textContent = main_text1[textNum];
    textNum++;
    document.getElementById("option2").value = option2[option2Num+1];
    //console.log(option2[option2Num]);
    option2Num++;

    document.getElementById("option1").value = option1[option1Num+1];
    //console.log(option1[option1Num]);
    option1Num++;
    
}



var textNum = 0;
var option1Num = 0;
var option2Num = 0;
//function scene(optionNum,sceneNum){
    var option1 = [
        `Run to the bus`,  
        `Be cool and laid back`,
        `Put some headphones on and go to sleep`,
        `Go to the canteen`, 
        `Go to class`
    ];
    var option2 = [
        `Walk to the bus`,
        `Jump up and down in excitement`,
        `Talk to your crush`,
        `Go to the back of the varsity`,
        `Bunk Class`
    ];
    var main_text = [
        /* `First day at UIU after Covid-19. You think about the endless possibilities that can take place today. You do your daily activities and head for the UIU bus at 7AM.`, */
        `You ${option1[option1Num]} to the bus. You meet all your varsity friends after almost a year. What do you do?`,
        `You ${option1[option1Num+1]}. The bus finally comes to the bus stand. You and your friends get on while talking after ages. It’s quite an exciting day! You sit at the back of the bus along with your friends.`,
        `You ${option1[option1Num+2]}. After just 30 minutes of high-speed driving with no traffic, you finally reach the grand parking spot of UIU. You get off the bus. What do you do?`,
        `You ${option1[option1Num+3]}. You have paratha and daal with your friends. Time goes by fast and it’s time for your first class at 8.30AM.`,
        `To Be Continued. Hope you enjoyed the demo!! -Pav`
    ];
    var main_text1 = [
        /* `First day at UIU after Covid-19. You think about the endless possibilities that can take place today. You do your daily activities and head for the UIU bus at 7AM.`, */
        `You ${option2[option2Num]} to the bus. You meet all your varsity friends after almost a year. What do you do?`,
        `You ${option2[option2Num+1]}. The bus finally comes to the bus stand. You and your friends get on while talking after ages. It’s quite an exciting day! You sit at the back of the bus along with your friends.`,
        `You ${option2[option2Num+2]}. After just 30 minutes of high-speed driving with no traffic, you finally reach the grand parking spot of UIU. You get off the bus. What do you do?`,
        `You ${option2[option2Num+3]}. You have paratha and daal with your friends. Time goes by fast and it’s time for your first class at 8.30AM.`,
        `To Be Continued. Hope you enjoyed the demo!! -Pav`
    ];
    //return [main_text[sceneNum],option[optionNum],option[optionNum+1],option[optionNum+2],option[optionNum+3]];
    
    //}
    
    
    /* var optionNum = 0;
    var sceneNum = 0; */

//document.getElementById("buttons").style.display = "none";







//disappear er
/* function myFunction() {
    let x1 = document.getElementById("main_button");

    if (x1.style.display === "none") {
        x1.style.display = "block";
        document.getElementById("buttons").style.display = "block";      

    } 
    else {
        x1.style.display = "none";
        document.getElementById("buttons").style.display = "block";      
    }
    var scenex = scene(optionNum,sceneNum);
    document.getElementById("main_text").textContent = scenex[0];
    document.getElementById("option1").value = scenex[1];
    document.getElementById("option2").value = scenex[2];
  } */









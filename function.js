
// var innerText = $("btn").text();
// console.log(innerText);

$(document).on("keydown", function(){
    var level = 1;
    var level_array = [];
    for(var i=level; i<5; i++)
    {
        // alert("heyy");
        // $("h1").text("Level" + i);
        level_array[i]= (Math.floor(Math.random()*4)+1);
        var index = level_array[i];
        // document.querySelectorAll(".btn")[index].classList.add("pressed");
        $(".btn").eq(index).addClass("pressed");
        setTimeout(function(){
            
        }, 1000);
        $(".btn").eq(index).removeClass("pressed");
        
        var j=0;

            while(j<i){
                var numberClicked;
                $(".btn").click(function(){
                    numberClicked = this.innerHTML;
                    console.log(numberClicked);
                });
                if(level_array[j]===numberClicked){
                    console.log("CORRECCTT!!!");
                    j++;
                }
                else{
                    console.log("WRONGGG!");
                    break;
                }
            }

    }
});

$(document).on("keypress",function(event){
    console.log(event);
})
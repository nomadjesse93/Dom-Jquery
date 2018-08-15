document.addEventListener("DOMContentLoaded", function (event) {

    //1
    let button = $('<button>Dont push the button</button>').click(function () { alert('You pushed the button :('); });

    $(document.body).append(button)

    //2
    $("#button").click(function () {
        alert($("#txt").val())
    });

    //3
    $("#div").on("mouseover", function () {

        $("#div").css("background-color", "red")
    });

    $("#div").on("mouseout", function () {
        $("#div").css({ "background-color": "black" })
    });

    //4 
    let color = [
        "red", "blue", "green", "yellow", "orange", "brown", "cyan", "pink"
    ]

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)]
        return randomColor

    }



    $("#Para").on("click", function () {
        $("#Para").css({"color": getRandomColor()});
    });

    //5
    $("#btn").on("click", function(){
       let span = $("<span>Jesse Sanderson</span>")
       $("#btndiv").append(span)
        
    });
    //6
    let friends = ["dana", "shayna", "john", "billy", "vanessa", "lucifer", "karl", "edgar", "allen", "po"];

    
        

    

    $("#btn3").on("click", function(){

        for (i=0; i < friends.length; i++)

        $("#Friends").append("<li> " + friends[i] + " </li>")

    })
});
document.addEventListener("DOMContentLoaded", function (event) {
    // 1 
    let btn = (document.createElement("button"))
    let txt = (document.createTextNode("Click Me"))
    btn.appendChild(txt);
    document.body.appendChild(btn)

    btn.addEventListener("click", function () {
        alert("You will die in seven days")
    })
    //2 

    let words = document.getElementById('txt')

    let button = document.getElementById("button")
    button.addEventListener('click', function () {

        alert(words.value)

    });
    //3
    let div = document.getElementById("div")

    div.addEventListener("mouseover", function () {

        div.style.backgroundColor = "red"
    });

    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = null
    });

    //4 

    let color = [
        "red", "blue", "green", "yellow", "orange", "brown", "cyan", "pink"
    ]

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)]
        return randomColor

    }


    let para = document.getElementById("Para")

    para.addEventListener("click", function () {
        para.style.color = getRandomColor()
    });

    //5

    let name = document.getElementById("btn")

    let title = document.createElement("span")
    let text = document.createTextNode("Jesse Sanderson")
    title.appendChild(text)


    name.addEventListener("click", function () {
        let div = document.getElementById("btndiv")
        div.appendChild(title)

    });

    //6 
    let friends = [ "dana", "shayna" ,"john" , "billy" , "vanessa" , "lucifer" ,"karl", "edgar" ,"allen" ,"po" ];
    

    let btnf = document.getElementById("btn3")
    
    btnf.addEventListener("click", function () {
        let ul = document.getElementById("Friends")
        
            for (i=0; i < friends.length; i++){
                let li = document.createElement("li")
                let txt2 = document.createTextNode(friends[i])
                li.appendChild(txt2)
                ul.appendChild(li)
            }
        
    
        
    });

    
   



});




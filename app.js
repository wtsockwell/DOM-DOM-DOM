document.addEventListener("DOMContentLoaded", function(){
    //Button elements
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Add Square");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    //Container set up
    let container = document.createElement("div")
    document.body.appendChild(container)
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    let i = 1

    //Button event function
    button.addEventListener("click", function(){
        //square setup
        let square = document.createElement("div");
        let h1 = document.createElement("h1")
        let h1Text = document.createTextNode(i)
        square.style.backgroundColor = "black";
        square.style.height = "100px"
        square.style.width = "100px"
        square.className = "lego"
        square.id = i
        h1.className = "hidden"
        container.appendChild(square)
        square.appendChild(h1)
        h1.appendChild(h1Text)
        //square functions
        square.addEventListener("click", function(){
            let color = ["darkgreen", "darkblue","darkgoldenrod"]
            let i = Math.floor(Math.random()*4)
            square.style.backgroundColor = color[i]
        })
        i++
        square.addEventListener("dblclick", function(){
            if (square.previousSibling == null){
                alert("There is nothing to delete")
            } else if (square.id %2 == 0){
                if (square.nextSibling == null){
                    alert("There is nothing to delete")
                } else {
                    container.removeChild(square.nextSibling)
                }
            } else {
                container.removeChild(square.previousSibling)
            }

        })
    })
})
function Counter() {

    document.getElementById("outputDiv").style.display = "inline-block";

    var child = document.getElementById("empty").lastElementChild; 
    while (child) {
        document.getElementById("empty").removeChild(child);
        child = document.getElementById("empty").lastElementChild;
    }

    const INPUT = document.getElementById("textarea").value;
    var num = 0;
    var numChar = 0;
    var chars = 0;
    var letters = 0;
    var special = 0;
    var lowChar = 0;
    var upChar = 0;
    var words = 0;
    var sentence = 0;
    var entry = INPUT.toLowerCase().replaceAll(/\s+/g, " ").trim();

    if(INPUT.length > 0) document.querySelector("a").style.display = "inline-block";

    var wordArr = entry.split(" ");
    console.table(wordArr);

    words=wordArr.length;

    for (let element of wordArr) {
        if (/^-?\d+$/.test(element)) num++;

    }
    for(var element of INPUT){
        if(element.toUpperCase() != element.toLowerCase()){
        letters++;
            if(element.toLowerCase()==element) lowChar++;

            if(element.toUpperCase()==element) upChar++;
        }
        if(/^-?\d+$/.test(element)) numChar++;

        if(element.toUpperCase() == element.toLowerCase()) special++;
    }

    for(i = 0; i < INPUT.length; i++){
        if(INPUT.charAt(i)+INPUT.charAt(i+1) == ". " || INPUT.charAt(i)+INPUT.charAt(i+1) == "! " || INPUT.charAt(i)+INPUT.charAt(i+1) == "? ") sentence++;
    }
    if(!"!?.".includes(entry.trim().charAt(element.length-1))) sentence++;

    var toDo = [
        words + " words",
        sentence + " sentences",
        num + " numbers",
        entry.length + " characters (excluding extra spaces)",
        INPUT.length + " characters in total",
        letters + " letters",
        numChar + " numeric characters",
        upChar + " upppercase characters",
        lowChar + " lowercase characters",
        special + " special characters"
        ]
    for (let element of toDo) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(element);
        node.appendChild(textnode);
        document.getElementById("empty").appendChild(node);
    }
}
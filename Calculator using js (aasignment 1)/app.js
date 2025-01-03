function inputValue(value){
    var input = document.getElementById("input");
    input.value += value;
}

function result(){
    var input = document.getElementById("input");
    var ans = eval(input.value);
    console.log("ans", ans);
    input.value = ans;
}

function allClear(){
    var input = document.getElementById("input");
    input.value = "";
}

function removeValue(){
    var input = document.getElementById("input");
    var copy = input.value.slice(0, -1)
    console.log("copy", copy)
    input.value = copy 
}

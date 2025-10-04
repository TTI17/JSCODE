function getVariables(){
    let m = Number(document.loandata.m.value);
    let h = Number(document.loandata.h.value);
    const g = 9.8;

    let e = m*g*h;
    let space_out = document.getElementById("space");
    console.log(e)
    space_out.innerHTML = e.toFixed(2);
}
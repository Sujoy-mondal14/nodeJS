function add(a,b){
    return a+b
}

function sub(a,b){
    return a>b ? a-b : b-a;
}

module.exports = {
    add, sub
}
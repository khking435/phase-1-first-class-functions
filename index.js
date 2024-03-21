function receivesAFunction(spy){
    spy()
}
function returnsANamedFunction(){
    function fn(){

    }
    return fn
}

function returnsAnAnonymousFunction(){
    
    function fn() {

    }
    return () => {}
}
function aaa(fun, a, b){
    let timeer = null,
    count = 0;
    const start = () => {
        timeer = setTimeout(()=>{
            fun()
            count++
            start()
        }, a+count++*b)
    }
    const stop = () =>{
        clearTimeout(timeer)
        timeer = null
    }
    return {start,stop}
}
const {start,stop} = aaa(()=>{console.log(123),1000,2000;})
setTimeout(()=>{
    stop()
},1000)
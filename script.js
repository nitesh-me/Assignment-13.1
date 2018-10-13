function UpperCaseConverter(input){

    return new Promise((resolve, reject)=>{
       
        if(!input || input.trim() === "") {
            reject("No input or black space");
            
        }

        setTimeout(function(){
            resolve(input.toUpperCase());
        },input.length*1000);
       
    })
}
console.log('for the input "Hello"');
var fg = UpperCaseConverter(" hello");
fg.then(data=>{console.log(data);}).catch(
    er=>{console.log("catch");console.log(er)}
);

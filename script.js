const calculate = () =>  {
    let total = document.getElementById('total');
    let val = document.querySelectorAll('.btn');
    let summ = document.getElementById('summary');
    let clear = document.getElementById('clear');
   
    for (let i = 0; i < val.length; i++) {
    val[i].addEventListener('click',function() {
            // console.log(this.innerHTML);
            total.value += this.innerHTML;
        })        
    };

    summ.addEventListener('click', function() {
       let all = eval(total.value);
        console.log(all);
        total.value = all;
});

    clear.addEventListener('click', function() {
     total.value = "";
});

};
calculate();
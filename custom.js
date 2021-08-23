function handleTwoItems(classes, isIncrease){
    const getValue = document.getElementById(classes +'_value');
    const parse = parseFloat(getValue.value)
    let newCount = parse;
    if(isIncrease == true){
        newCount = parse + 1;
    }
    if(isIncrease == false && parse > 0){
        newCount = parse - 1;
    }
   getValue.value = newCount;
    let total = 0;
    if(classes +'_value' === "first_value"){
        total = newCount * 150;
    }
    else if(classes +'_value'=== 'eco_value'){
        total = newCount * 100;
    }
   const totalTaka = document.getElementById(classes+'_taka').innerText =`$`+total;

   calculateTotal();
}

const calculateTotal = ()=>{
    const parseFirstClassValue = getInputValue('first');
    const parseEcoClassValue = getInputValue('eco');
    const totalPrice = parseFirstClassValue * 150 + parseEcoClassValue * 100;
    console.log(totalPrice)
    const subTotal = document.getElementById('subTotal').innerText = '$' + totalPrice;
    const tax = totalPrice / 10;
    console.log(tax)
    const grandTotal = totalPrice + tax;
    document.getElementById('tax').innerText = tax;
    document.getElementById('allTotal').innerText = grandTotal;
}

const getInputValue = (classes)=>{
     const firstClassValue = document.getElementById(classes+'_value');
    const parseFirstEcoClassValue = parseInt(firstClassValue.value);
    return parseFirstEcoClassValue;
}
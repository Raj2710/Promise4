function convert(){
    var fromcurrency = document.querySelector('#from');
    var from = fromcurrency.value;
    //console.log(from)
    var tocurrency = document.querySelector('#to');
    var to = tocurrency.value;
    //console.log(to)
    var out = document.querySelector('#output');
    var mul = document.querySelector('#multiplier').value;
    fetch(`https://v6.exchangerate-api.com/v6/aedc1a55c77538da87874bf7/latest/${from}`)
    .then(response=>{
        return response.json();
    }).then(val=>{
        out.innerHTML=`${mul} ${from} = ${val.conversion_rates[to]*mul} ${to}`;
    }).catch(reason=>{
        out.innerHTML="Error in Fetching the data";
    })
}
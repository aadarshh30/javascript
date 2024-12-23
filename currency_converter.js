
const base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const dropdowns=document.querySelectorAll(".dropdown select");


for(let select of dropdowns) 
{
    for(currCode in countryList)
    {                                                      
        
        let newOption = document.createElement("option");
         newOption.innerText=currCode;
         newOption.value=currCode;
         select.append(newOption);
    }
}


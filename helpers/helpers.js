export const usdFormat = (number) => { //regex that formats the price into USD currency
    return `$${number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`; 
  }

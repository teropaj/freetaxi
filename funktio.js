text=''
function teeTeksti () {
    const ruudut=document.querySelectorAll('span')

    let viimeinen=''
    let alku=47
    let silmukkaOn=false
    console.log('alkaa')

    for (ruutu=39;ruutu<ruudut.length;ruutu++) {
      
      let i=ruudut[ruutu].innerHTML
      if (i==='1111') silmukkaOn=true
       
       
      if (silmukkaOn) {
          console.log(i)
          if(i.includes('min')) {} 
          else
              {if (!isNaN(i)   ) {text+=i+' '; }
              else
                {if (i[0]===i[0].toUpperCase()) {text+=i+'*';}
                }
          }
          
        //console.log(parseInt(ruudut[alku]!=NaN))
        //   console.log('alku= '+alku+'1 '+parseInt(ruudut[alku]))
        //   console.log('2 '+parseInt(ruudut[alku]!=NaN))
          
                
        if (i==='Heikinlaakso') silmukkaOn=false
      } 
    }
    tulosruutu=document.createElement('textarea')
    textnode=document.createTextNode(text)
    tulosruutu.appendChild(textnode)
    document.querySelector('body').appendChild(tulosruutu)

}

  
import PropTypes from 'prop-types';


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  


const QuoteBtn = ({ColorTheme,setColorTheme,setQuote,setAuthor,setFade}) => {

    QuoteBtn.propTypes = {
        ColorTheme: PropTypes.string.isRequired,
        setColorTheme: PropTypes.func.isRequired,
        setQuote: PropTypes.func.isRequired,
        setAuthor: PropTypes.func.isRequired,
        setFade: PropTypes.func.isRequired
      }

      const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    async function changeColor() 
    {
      var newColor = getRandomColor();
      setColorTheme(newColor);
      setFade("fade-out-text");
      
      await delay(1000);
      updateQuote();
      setFade("fade-in-text");
      
    }

    

    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
          // Update DOM elements
          setQuote(data.content);
          setAuthor(data.author);
        } else {
          setQuote("An error occured");
          setAuthor("Bug");
        }
      }
    
  return (
    <button style={ {backgroundColor: ColorTheme}}  
    className="p-3 h-[50px] hover:bg-slate-500
     bg-black text-white rounded-lg   "              
        onClick={()=>
        {   
            changeColor();
            
        }
        } >
                New Quote
     </button>
  )
}



export default QuoteBtn
import { useState, useEffect } from "react";
import SocialBtn from "./components/SocialBtn";
import QuoteBtn from "./components/QuoteBtn";
import QuoteBox from "./components/QuoteBox";
function App() {

 
  const [Quote, setQuote] = useState("Hiya Barbie!");
  const [Author, setAuthor] = useState("Ken");
  const [ColorTheme, setColorTheme] = useState("#DA1884");
  const [Fade, setFade] = useState("");

  useEffect(() => 
  {
    setQuote("Hiya Barbie!")
    setAuthor("Ken")
    setFade("fade-in-text")
  }, ["Hiya Barbie!"], ["Ken"], ["fade-in-text"]
  )

   

  return (
    <>
    <div id="container" style={ {backgroundColor: ColorTheme}}
     className="h-[100vh] p-10 w-full">

      <div id="quote-box" className="centered-div ">

      
        
        <div className="p-8 w-[450px]  h-auto bg-white align-middle rounded-t-lg">
          
          <QuoteBox
            ColorTheme={ColorTheme}
            Quote={Quote}
            Author={Author}
            Fade={Fade}
          />
          </div>

          <div className="p-8 w-[450px] bg-white  rounded-b-lg ">

            <div className="flex justify-between">


              <div className="justify-start">
              
                <SocialBtn 
                mycolor={ColorTheme}
                quote={Quote + " - " + Author}/>

              </div>
              
              <div id="new-quote" className="justify-end">
                
                <QuoteBtn 
                    ColorTheme={ColorTheme}
                    setColorTheme={setColorTheme}
                    setQuote={setQuote}
                    setAuthor={setAuthor}
                    setFade={setFade}/>

              </div>
              

            </div>
          </div>

          
        </div>

      </div>
     
   
      
    </>
  )
}

export default App;

import PropTypes from 'prop-types';

const QuoteBox = ({ColorTheme,Quote,Author, Fade}) => {
    QuoteBox.propTypes = {
        ColorTheme: PropTypes.string.isRequired,
        Quote: PropTypes.string.isRequired,
        Author: PropTypes.string.isRequired,
        Fade: PropTypes.string.isRequired
      }
  return (
    <>
        <div>
            <p>
                <i className="font-mono text-5xl"
                style={ {color: ColorTheme}}>&quot;</i> 
                <span id="text" className={Fade + " font-serif text-3xl font-bold"}>
                {Quote}
                </span>
            </p>
        </div>
          
          <div id="author" className={Fade + " flex justify-end "}>
            <p className="text-2xl"> - {Author}</p>
          </div>
    </>
    
          
    
  )
}

export default QuoteBox
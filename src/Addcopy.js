import React,{useState} from 'react'

function AddCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);
  
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
    .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }
    return (
        <>
            {copyText==null ? null : <div className='contentContainer'> 
             <button className='copyBtn' onClick={handleCopyClick}>
                 <span>{isCopied ? 'Copied!' : 'Copy'}</span>
             </button>
             <div className='contentTextDiv'>{copyText}</div>
             </div> }
        </>
      );
    }
    

export default AddCopy;
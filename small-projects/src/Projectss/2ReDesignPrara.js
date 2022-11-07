import React, { useState } from "react";

function ReDesignPrara() {
  const [getColor, setColor] = useState({ color: "" });
  const [getSize ,setSize] = useState({fontSize:""});
  const [getBold,setBold] = useState(false)

  const ColorChange= (event) =>{
    setColor({
        color:event.target.value
    })
  }

  const SizeHandler = (event) =>{
    setSize({
        fontSize:event.target.value+"px"
    })
  }
  
  const InlineCss={
    color:getColor.color,
    fontSize:getSize.fontSize
  }

  const BoldHandler =(event) =>{
    setBold(event.target.value)
  }

  return (
    <div>
      <label>Color:</label>
      <input type="text" onChange={ColorChange} />

      <label>Font Size</label>
      <input type="range" min='0' max='100' default = '20' onChange={SizeHandler}/>

      <label>Bold</label>
      <input type="checkbox" onChange={BoldHandler} value="checked"/>

      {getBold ? <h1 style={InlineCss }>
        भारत दक्षिण एशिया में स्थित भारतीय उपमहाद्वीप का सबसे बड़ा देश है। भारत
        भौगोलिक दृष्टि से विश्व का सातवाँ सबसे बड़ा देश है, जबकि जनसंख्या के
        दृष्टिकोण से चीन के बाद दूसरा सबसे बड़ा देश है। भारत के पश्चिम में
        पाकिस्तान, उत्तर-पूर्व में चीन, नेपाल और भूटान, पूर्व में बांग्लादेश और
        म्यान्मार स्थित हैं।
      </h1> :<p style={InlineCss }>
        भारत दक्षिण एशिया में स्थित भारतीय उपमहाद्वीप का सबसे बड़ा देश है। भारत
        भौगोलिक दृष्टि से विश्व का सातवाँ सबसे बड़ा देश है, जबकि जनसंख्या के
        दृष्टिकोण से चीन के बाद दूसरा सबसे बड़ा देश है। भारत के पश्चिम में
        पाकिस्तान, उत्तर-पूर्व में चीन, नेपाल और भूटान, पूर्व में बांग्लादेश और
        म्यान्मार स्थित हैं।
      </p>}
    </div>
  );
}

export default ReDesignPrara;

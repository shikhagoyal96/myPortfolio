import React from  'react';
import file from "../ShikhaGoyal_Resume.pdf";


const MyResume = ()=>{
return (
    <div>
    <iframe
            style={{ width: "100%", height: "800px" }}
            src={file}
            type='application/pdf'
            title='ShikhaGoyal_Resume.pdf'
          />
</div>
)

}
export default MyResume
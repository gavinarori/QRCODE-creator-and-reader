
"use client"
import React, { useState } from 'react';
import QRcode from 'qrcode.react';

function QRgenerator() {
    const [qr, setQr] = useState('Dedan kimathi university');

    const handleChange = (event:any) => {
        setQr(event.target.value);
    };

    
    return (
        <section className='bg-indigo-700 w-screen h-screen'>
            <div className='flex justify-center items-center'>
             <div  className="block mt-6">
  
  <div className='flex justify-center'> 
  {
                    qr ?
                        <QRcode
                            id="myqr"
                            value={qr}
                            size={320}
                            includeMargin={true}
                        /> :
                        <p>No QR code preview</p>
                }
  </div>

  <div className='mt-6 '>
                    <label className="text-gray-100 text text-center ">type to generate a QR Code
                    </label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text"
                        onChange={handleChange}
                        value={qr}
                        placeholder="QR content"
                        />
                </div>

               
<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
<button
  className="mt-5 block rounded border border-gray-100 px-6 py-3 text-sm font-medium text-gray-100 hover:bg-accent hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
>
  Save
</button>

<a
  className=" mt-5 block rounded border border-gray-100  text-center px-6 py-3 text-sm font-medium text-gray-100 hover:bg-accent hover:text-white focus:outline-none focus:ring active:text-indigo-500"
  href="#"
>
 Scan
</a>

</div>
</div>
        </div>
        </section>
        
       
    );
}

export default QRgenerator;

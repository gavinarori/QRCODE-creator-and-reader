"use client";
import React, { useState } from 'react';
import QrScanner from 'qr-scanner';

const Scanner = () =>{
    const [result ,setResult] = useState("")

    const readCode = (e:any) =>{
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        QrScanner.scanImage(file, { returnDetailedScanResult: true })
            .then(result => setResult(result.data))
            .catch(e => console.log(e));
      }

      return(
        <div className="dark:bg-gray-900 bg-gray-100 flex justify-center items-center h-screen">
   <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 dark:text-white">File Upload</h2>
      <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-8 text-center">
      <input type="file" onChange={(e) =>readCode(e)} />
         <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
         </svg>
         <p className="text-sm text-gray-600 dark:text-gray-400">Drag & Drop your files here or <label  className="cursor-pointer text-blue-500 hover:underline">browse</label> to upload.</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md w-full mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:ring-opacity-50">Upload</button>
   </div>
</div>
      )
}

export default Scanner;
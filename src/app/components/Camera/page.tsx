"use client"
import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

interface Camera {
  id: string;
  label: string;
}

const QrScannerComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [result, setResult] = useState<string>('');
  const [hasFlash, setHasFlash] = useState<boolean>(false);
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [hasCamera, setHasCamera] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      const scanner = new QrScanner(
        videoRef.current,
        (result: string) => setResult(result)
      );

      const updateFlashAvailability = () => {
        scanner.hasFlash().then(setHasFlash);
      };

      scanner.start().then(() => {
        updateFlashAvailability();
        QrScanner.listCameras(true).then((cameras) => {
          setCameras(cameras.map(camera => ({
            id: camera.id,
            label: camera.label
          })));
        });
      });

      QrScanner.hasCamera().then(setHasCamera);

      // Cleanup on component unmount
      return () => {
        scanner.stop();
      };
    }
  }, []);

  return (
    <div className='flex justify-center items-center  bg-indigo-700 w-screen h-screen'>
    <a  className="group block">
    <video ref={videoRef} className="h-[350px] w-full object-cover sm:h-[450px] rounded-2xl"></video>

  <div className="mt-1.5">
    <p className="text-xs text-gray-200">QR Code Result: {result}</p>

    <div className="mt-1.5 flex gap-1">
      <form>
        
        <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
        
        <div>
  <label htmlFor="HeadlineAct" className="block text-sm text-gray-200"> select your Camera </label>

  <select
    name="HeadlineAct"
    id="HeadlineAct"
    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
  >
    {cameras.map((camera) => (
            <option key={camera.id} value={camera.id}>
              {camera.label}
            </option>
          ))}
  </select>
</div> 
        </div>
      </form>
    </div>

    <div className="mt-3 flex justify-between text-sm">
      <h3 className="text-gray-200 group-hover:underline group-hover:underline-offset-4">
       Has Flash: {hasFlash.toString()}
      </h3>

      <p className="text-gray-200">Has Camera: {hasCamera.toString()}</p>
    </div>
  </div>
</a>
     
    </div>
  );
};

export default QrScannerComponent;

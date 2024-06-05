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
    <div>
      <video ref={videoRef} style={{ width: '100%' }}></video>
      <div>
        <p>QR Code Result: {result}</p>
        <p>Has Flash: {hasFlash.toString()}</p>
        <p>Has Camera: {hasCamera.toString()}</p>
        <select>
          {cameras.map((camera) => (
            <option key={camera.id} value={camera.id}>
              {camera.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QrScannerComponent;

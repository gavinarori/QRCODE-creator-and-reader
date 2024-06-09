"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation"
import toast, { Toaster } from 'react-hot-toast';

function QRgenerator() {
    const [qr, setQr] = useState('Dedan kimathi university');
    const router = useRouter();
    const { data: session, status }: any = useSession();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQr(event.target.value);
    };

    useEffect(() => {
      if(!session){
        router.push('/components/login')
      }
    })
    const download = () => {
        const svg = document.querySelector("#QRCode") as HTMLElement | null;
        if (!svg) {
            console.error("SVG element not found!");
            return;
        }

        try {
            const svgData = new XMLSerializer().serializeToString(svg);
            console.log('Serialized SVG Data:', svgData);

            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                console.error("Failed to get canvas context!");
                return;
            }

            const img = new Image();
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const pngFile = canvas.toDataURL("image/png");

                // Create a link element to download the image.
                const downloadLink = document.createElement("a");
                downloadLink.download = `${qr}.png`;
                downloadLink.href = pngFile;
                downloadLink.click();
            };

            img.onerror = (err) => {
                console.error("Image failed to load", err);
            };

            img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
        } catch (error) {
            console.error("Failed to serialize SVG or create image", error);
        }
    };

    const handleSave = async () => {
      try {
          const response = await axios.post('/api/qrcode', { qrcodes: qr });
          toast.success('QR code saved successfully!');
          console.log('QR code saved successfully:', response.data);
      } catch (error) {
          console.error('Failed to save QR code:', error);
          toast.error('Failed to save QR code');
      }
  };
    

    return (
        <section className="bg-indigo-700 w-screen h-screen">
            <div className="flex justify-center items-center">
            <Toaster />
                <div className="block mt-6">
                    <div className="flex justify-center">
                        {qr ? (
                            <QRCode
                                id="QRCode"
                                value={qr}
                                size={320}
                                includeMargin={true}
                                renderAs="svg"
                            />
                        ) : (
                            <p>No QR code preview</p>
                        )}
                    </div>
                    <div className="mt-6">
                        <label className="text-gray-100 text text-center flex justify-center">
                            Type to generate a QR Code
                        </label>
                        <input
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                            type="text"
                            onChange={handleChange}
                            value={qr}
                            placeholder="QR content"
                        />
                        <button type="button" onClick={download}>
                            Download
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                        <button onClick={handleSave} className="mt-5 block rounded border border-gray-100 px-6 py-3 text-sm font-medium text-gray-100 hover:bg-accent hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
                            Save
                        </button>
                        <a
                            className="mt-5 block rounded border border-gray-100 text-center px-6 py-3 text-sm font-medium text-gray-100 hover:bg-accent hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                            href="/components/Camera"
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

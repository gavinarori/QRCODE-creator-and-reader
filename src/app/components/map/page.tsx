"use client"
import dynamic from "next/dynamic";
import { useMemo, useState, useEffect } from "react";

export default function Page() {
    const Map = useMemo(() => dynamic(
        () => import('./Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), []);

    const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation([latitude, longitude]);
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    setCurrentLocation([-1.1973489, 36.9301873]); 
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <>
            <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
                {currentLocation ? <Map posix={currentLocation} /> : <p>Loading current location...</p>}
            </div>
        </>
    );
}

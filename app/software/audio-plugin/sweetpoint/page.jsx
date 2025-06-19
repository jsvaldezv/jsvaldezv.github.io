"use client";
import React, { useState } from "react";
import SoftwareHero from "@/components/SoftwareHero";

const SweetPoint = () => {
    return (
        <SoftwareHero
            MainTitle={"SweetPoint"}
            Category={"Audio Plug-in"}
            ShortDescription={"Smart Stereo Field Optimizer"}
            LargeDescription={
                "SweetPoint is an innovative audio plugin designed to smartly optimize your stereo field with transparent mid-side processing. Featuring a unique, in-house-developed smart assistant, SweetPoint provides expert guidance to help you achieve your ideal stereo image effortlessly."
            }
            ExternalLink={"https://www.earcandytech.com/sweetpoint"}
            TechnologiesUsed={["/logos/JUCE.png", "/logos/cpp.png"]}
            MainImage={"/plugins/viewSweetpoint.png"}
            YouTubeLink={"https://www.youtube.com/embed/8JyBXTnEblc?si=Dt496cZ-f84R882P"}
        />
    );
};

export default SweetPoint;

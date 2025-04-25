import React from 'react'
import HeroSection from "@/src/components/HeroSection";
import TrustValueProps from "@/src/components/TrustValueProps";
import SignageExperts from '@/src/components/common/signageComponents/SignageExperts';
import OurGallery from '@/src/components/common/signageComponents/OurGallery';
import TypesOfSignage from '@/src/components/common/signageComponents/TypesOfSignage';
import VehicleGraphics from '@/src/components/common/signageComponents/VehicleGraphics';
import PerfectSign from '@/src/components/common/signageComponents/PerfectSign';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import RecentWork from '@/src/components/common/signageComponents/RecentWork';
import FaqSection from '@/src/components/common/signageComponents/FaqSection';
import CallToAction from '@/src/components/CallToAction';
const Signage = () => {
    return (
        <>
            <HeroSection />
            <TrustValueProps />
            <SignageExperts />
            <OurGallery />
            <TypesOfSignage />
            <VehicleGraphics />
            <PerfectSign />
            <WhyChooseUs />
            <RecentWork />
            <FaqSection />
            <CallToAction />
        </>
    )
}

export default Signage;
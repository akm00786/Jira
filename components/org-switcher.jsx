"use client"

import { OrganizationSwitcher, SignedIn, useOrganization, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react'

const OrgSwitcher = () => {

    const {isLoaded} = useOrganization();
    const{ isLoaded: isUserLoaded} = useUser();
    const pathname = usePathname();

    if(!isLoaded || !isUserLoaded){
        return null;
    }


  return (
    <SignedIn>
        <OrganizationSwitcher hidePersonal
        afterCreateOrganizationUrl={"/organization/:slug"}
        afterSelectOrganizationUrl={"/organization/:slug"}

        createOrganizationMode={
            pathname === "/onboarding" ? "navigation" : "modal"
        }
       CreateOrganizationUrl="/onboarding"

       appearance={{
        elements: {
            organizationSwitcherTrigger:"border border-gray-300 rounded-md px-5 py-2",
            organizationSwitcherTriggerIcon:"text-white",
             
        },
    }}
        />
    </SignedIn>
  )
}

export default OrgSwitcher;
"use client"

import * as React from "react"
import { motion } from "framer-motion";
import Image from "next/image"
import { AspectRatio } from "../ui";
import moreInfoData from '#/config/landing-page/more-info.json';

const MoreInfo = () => {

  return (
    <section className="more_info relative min-h-[100vh] w-full max-w-[100%] overflow-y-auto overflow-x-hidden border">
      <div className="info_main_container relative z-10 mx-auto flex h-[2900px] max-w-[1200px] flex-col items-center justify-center space-y-24">
        <div className="hardware relative flex h-auto w-full flex-row items-start justify-center space-x-3">
          <div className="more_info_image h-[800px] lg:w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted h-[800px] w-[500px] rounded-lg">
              <Image
                src="/hardware.jpg"
                alt="best animated in the world"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div className="h-full lg:w-[500px] flex flex-col items-start justify-between">
            {Object.entries(moreInfoData.hardware).map(([key, value]) => (
              <div className="min-h-[250px] w-full border rounded-md p-5 text-start flex items-center justify-start flex-col space-y-3" key={key}>
                <span className="center rounded-sm border p-3 w-full">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <motion.div
            drag
            className="blurry_gradient_hardware absolute bottom-0 right-0 z-[0] h-[250px] w-[250px] rounded-full">
          </motion.div>
        </div>
        <div className="software relative flex h-auto w-full flex-row items-start justify-center space-x-3">
          <div className="h-full lg:w-[500px] flex flex-col items-start justify-between">
            {Object.entries(moreInfoData.software).map(([key, value]) => (
              <div className="min-h-[250px] w-full border rounded-md p-5 text-start flex items-center justify-start flex-col space-y-3" key={key}>
                <span className="center rounded-sm border p-3 w-full">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="more_info_image h-[800px] w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted h-[800px] w-[500px] rounded-lg">
              <Image
                src="/software.jpg"
                alt="best animated in the world"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <motion.div
            drag
            className="blurry_gradient_software absolute bottom-0 left-0 z-[0] h-[250px] w-[250px] rounded-full">
          </motion.div>
        </div>
        <div className="cloud relative flex h-auto w-full flex-row items-start justify-center space-x-3">
          <div className="more_info_image h-[800px] w-[500px] border">
            <AspectRatio ratio={1 / 1} className="bg-muted h-[800px] w-[500px] rounded-lg">
              <Image
                src="/cloud.jpg"
                alt="best animated in the world"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div className="h-full lg:w-[500px] flex flex-col items-start justify-between">
            {Object.entries(moreInfoData.cloud).map(([key, value]) => (
              <div className="min-h-[250px] w-full border rounded-md p-5 text-start flex items-center justify-start flex-col space-y-3" key={key}>
                <span className="center rounded-sm border p-3 w-full">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <motion.div
            drag
            className="blurry_gradient_cloud absolute bottom-0 right-0 z-[0] h-[250px] w-[250px] rounded-full">
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MoreInfo
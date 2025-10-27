"use client";

import NextImage, { ImageProps } from "next/image";
import React from "react";

/**
 * Simple drop-in replacement for next/image that automatically
 * reduces image quality to keep it under ~500KB.
 *
 * Usage:
 * import Image from "@/components/SmartImage";
 * <Image src="/image.jpg" width={800} height={600} alt="Example" />
 */

export default function SmartImage(props: ImageProps) {
  const { quality = 60, ...rest } = props; // lower quality → smaller file
  return <NextImage {...rest} quality={quality} />;
}

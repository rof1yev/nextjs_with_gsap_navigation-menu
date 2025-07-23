"use client";

import { menuLinks } from "@/constants";
import { useMenu } from "@/hooks/use-menu";
import { MenuLinkItemType } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";

const Menu = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { isOpen, setOpen } = useMenu();

  const timeLine = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: -90 });

      timeLine.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (!timeLine.current) return;

    if (isOpen) timeLine.current.play();
    else timeLine.current.reverse();
  }, [isOpen]);

  return (
    <div ref={container} className="py-2 ">
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-[2]">
        <div className="menu-logo">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Logo"
              className="object-cover rounded-full"
            />
            <span className="font-semibold">rof1yev</span>
          </Link>
        </div>
        <div className="menu-open" onClick={setOpen}>
          <p className="cursor-pointer">Menu</p>
        </div>
      </div>

      <div
        className="menu-overlay fixed top-0 left-0 w-full p-4 flex flex-col justify-between bg-[#c5fb45] z-[50] h-full"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0, 0% 0%)",
        }}
      >
        <div className="">
          <div className="flex w-full items-center justify-between">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="Logo"
                className="object-cover rounded-full"
              />
              <span className="font-semibold text-black">rof1yev</span>
            </Link>

            <p className="text-black cursor-pointer" onClick={setOpen}>
              Close
            </p>
          </div>
          <div className="flex pl-64 pt-14 text-black">
            <div>
              {menuLinks.map((item: MenuLinkItemType) => (
                <div
                  key={item.id}
                  className="menu-link-item w-max"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <div
                    className="menu-link-item-holder relative"
                    onClick={setOpen}
                  >
                    <Link
                      href={item.path}
                      className="text-black text-8xl font-normal"
                    >
                      {item.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full gap-4 text-black">
          <div className="flex gap-8 items-end">
            <div>
              <Link
                href="#"
                className="flex items-center justify-between gap-3 text-xl group"
              >
                X
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between gap-3 text-xl group"
              >
                Instagram
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between gap-3 text-xl group"
              >
                Telegram
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between gap-3 text-xl group"
              >
                Github
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
            <div>
              <p className="flex gap-2 items-center">
                <IoMdMail /> @rofiyevdilshod@gmail.com
              </p>
              <p className="flex gap-2 items-center">
                <FaPhoneAlt /> +998 50 582 90 80
              </p>
              <p className="flex gap-2 items-center">
                <FaLocationDot /> Samarkhand, Uzbekistan
              </p>
            </div>
          </div>
          <div className="text-black flex items-end">
            <p>View Showreel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

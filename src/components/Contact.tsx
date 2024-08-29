"use client";
import React from "react";
import { motion } from "framer-motion";
import TitleText from "./TitleText";
import { fadeIn, staggerContainer } from "@/utils/motion";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { IconPhone, IconMail, IconHomeLink } from "@tabler/icons-react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center">
      <TitleText title="Contact Us" />
      <div className="grid my-20 ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex mx-auto"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="max-w-2xl w-full rounded-2xl m-5 p-4 md:p-8 bg-white border-[1px] border-[#0e514f] hover:shadow-md hover:shadow-[#0e514f]"
          >
            <h2 className="font-bold text-3xl lg:text-5xl text-emerald-500">
              Welcome to Elevate 2024
            </h2>
            <p className="text-neutral-700 text-sm max-w-sm mt-2">
              Login to aceternity if you can because we don&apos;t have a login
              flow yet
            </p>
            <form className="my-8">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="twitterpassword">Your twitter password</Label>
                <Input
                  id="twitterpassword"
                  placeholder="••••••••"
                  type="twitterpassword"
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-[#0e514f] block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-[#0e514f] to-transparent my-8 h-[1px] w-full" />

              <div className="flex flex-col space-y-4">
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-[#0e514f] rounded-md h-10 font-medium shadow-input bg-white"
                  type="submit"
                >
                  <IconBrandGithub className="h-4 w-4 text-[#0e514f]" />
                  <span className="text-[#0e514f] text-sm">
                    GitHub
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-[#0e514f] rounded-md h-10 font-medium shadow-input bg-white"
                  type="submit"
                >
                  <IconBrandGoogle className="h-4 w-4 text-[#0e514f]" />
                  <span className="text-[#0e514f] text-sm">
                    Google
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-[#0e514f] rounded-md h-10 font-medium shadow-input bg-white"
                  type="submit"
                >
                  <IconBrandOnlyfans className="h-4 w-4 text-[#0e514f]" />
                  <span className="text-[#0e514f] text-sm">
                    Facebook
                  </span>
                  <BottomGradient />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#0e514f] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#0e514f] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

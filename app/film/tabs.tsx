'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Tabs = () => {
  const pathName = usePathname()
  console.log("pathName",pathName);
  const tabs = [
    {
      label: "商业院线",
      href: "/film/commercial",
    },
    {
      label: "艺术放映",
      href: "/film/indie",
    },
  ];
  return (
    <div className=" w-full flex justify-center  bg-white mb-8">
      <div role="tablist" className=" tabs tabs-boxed w-fit">
        {tabs.map((item) => (
          <Link
            key={item.href}
            role="tab"
            href={item.href}
            className={`tab ${
              pathName === item.href ? "tab-active" : ""
            }  font-semibold px-10 `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tabs
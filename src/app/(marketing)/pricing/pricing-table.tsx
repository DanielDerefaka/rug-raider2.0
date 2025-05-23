"use client";
import React from "react";
import { IconCheck } from "@tabler/icons-react";
import { tiers } from "@/constants/tier";

export function PricingTable() {
  const CheckIcon = () => {
    return (
      <IconCheck className="mx-auto h-4 w-4 flex-shrink-0 text-black dark:text-white" />
    );
  };

  const tableFeatures = [
    {
      title: "Unlimited Chatbots",
      hobby: <CheckIcon />,
      starter: <CheckIcon />,
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "Customizable Chatbot Flows",
      hobby: <CheckIcon />,
      starter: <CheckIcon />,
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "AI-Powered Responses",
      hobby: <CheckIcon />,
      starter: <CheckIcon />,
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "Multi-Language Support",
      hobby: <CheckIcon />,
      starter: <CheckIcon />,
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "Integration with CRM",
      hobby: "",
      starter: <CheckIcon />,
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "Live Chat Handoff",
      hobby: "",
      starter: <CheckIcon />,
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "Advanced Analytics",
      hobby: "",
      starter: "",
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "Dedicated Support",
      hobby: "",
      starter: "",
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "Custom Branding",
      hobby: "",
      starter: "",
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "API Access",
      hobby: "",
      starter: "",
      professional: <CheckIcon />,
      enterprise: <CheckIcon />,
    },
    {
      title: "Priority Support",
      hobby: "",
      starter: "",
      professional: "",
      enterprise: <CheckIcon />,
    },
    {
      title: "Custom AI Models",
      hobby: "",
      starter: "",
      professional: "",
      enterprise: <CheckIcon />,
    },
  ];

  return (
    <div className="mx-auto w-full relative z-20 px-4 py-40">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="max-w-xs py-3.5 pl-4 pr-3 text-left text-3xl font-extrabold text-neutral-900 dark:text-white sm:pl-0"
                  ></th>
                  {tiers?.map((item, index) => (
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-lg font-semibold text-neutral-900 dark:text-white"
                      key={`pricing-${index}`}
                    >
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-800">
                {tableFeatures.map((feature) => (
                  <tr key={feature.title}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 dark:text-white sm:pl-0">
                      {feature.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center">
                      {feature.hobby}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center">
                      {feature.starter}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center">
                      {feature.professional}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center">
                      {feature.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
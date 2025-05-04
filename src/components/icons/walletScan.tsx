import clsx from "clsx"

type Props = { selected: boolean }

const WalletScan = ({ selected }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 6H19C19 4.89543 18.1046 4 17 4H7C5.89543 4 5 4.89543 5 6H3C1.89543 6 1 6.89543 1 8V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V8C23 6.89543 22.1046 6 21 6Z"
        className={clsx(
          "dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]",
          { "dark:!fill-[#C8C7FF] !fill-[#7540A9] ": selected },
        )}
      />
      <path
        d="M3 10H21M7 15H7.01M11 15H17M21 6C22.1046 6 23 6.89543 23 8V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V8C1 6.89543 1.89543 6 3 6M21 6V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V6M21 6H3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx(
          "dark:group-hover:stroke-[#353346] transition-all dark:stroke-[#C8C7FF] stroke-white group-hover:stroke-white",
          { "dark:!stroke-[#353346] !stroke-white ": selected },
        )}
      />
    </svg>
  )
}

export default WalletScan
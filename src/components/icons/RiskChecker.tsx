import clsx from "clsx"

type Props = { selected: boolean }

const RiskChecker = ({ selected }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        className={clsx(
          "dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]",
          { "dark:!fill-[#C8C7FF] !fill-[#7540A9] ": selected },
        )}
      />
      <path
        d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
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

export default RiskChecker
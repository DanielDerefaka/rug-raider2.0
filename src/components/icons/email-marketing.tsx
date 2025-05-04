import clsx from "clsx"

type Props = { selected: boolean }

const EmailMarketing = ({ selected }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z"
        className={clsx(
          "dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]",
          { "dark:!fill-[#C8C7FF] !fill-[#7540A9] ": selected },
        )}
      />
      <path
        d="M22 6L12 13L2 6"
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

export default EmailMarketing


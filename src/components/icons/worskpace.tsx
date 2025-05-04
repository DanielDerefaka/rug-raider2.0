import clsx from "clsx"

type Props = { selected: boolean }

const Workspace = ({ selected }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7 10.7L12.7 3.7C12.3 3.3 11.7 3.3 11.3 3.7L4.3 10.7C4.1 10.9 4 11.1 4 11.4V20C4 20.6 4.4 21 5 21H19C19.6 21 20 20.6 20 20V11.4C20 11.1 19.9 10.9 19.7 10.7Z"
        className={clsx(
          "dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]",
          { "dark:!fill-[#C8C7FF] !fill-[#7540A9] ": selected },
        )}
      />
      <path
        d="M9 15H15"
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

export default Workspace


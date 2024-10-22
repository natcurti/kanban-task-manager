export const MenuIcon = ({ colorMode }: { colorMode: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7H19"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12H13"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 17H19"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const AddBoardIcon = ({ colorMode }: { colorMode: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z"
        fill={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
      />
    </svg>
  );
};

export const SunIcon = ({ colorMode }: { colorMode: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="4"
        fill={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
      />
      <path
        d="M12 5V3"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 21V19"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.9498 7.04996L18.364 5.63574"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.63608 18.3644L7.05029 16.9502"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 12L21 12"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 12L5 12"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.9498 16.95L18.364 18.3643"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.63608 5.63559L7.05029 7.0498"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const MoonIcon = ({ colorMode }: { colorMode: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20V20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4V4Z"
        fill={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
      />
    </svg>
  );
};

export const CloseIcon = ({ colorMode }: { colorMode: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#191b1f"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddTaskIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6L12 18"
        stroke="#2A4DD0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 12L6 12"
        stroke="#2A4DD0"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CloseModal = ({ colorMode }: { colorMode: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#3662e3"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={colorMode === "dark" ? "#FEF7EE" : "#3662e3"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DoneIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
        stroke="#FEF7EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

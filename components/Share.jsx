export default function Share({ onClick }) {
  return (
    <div onClick={onClick} className="mb-0 cursor-pointer ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        className="scale-125"
      >
        <path
          d="M18.084 9.83301H5.16732C3.46647 9.83301 2.08398 11.2155 2.08398 12.9163V25.833C2.08398 27.5339 3.46647 28.9163 5.16732 28.9163H18.084C19.7848 28.9163 21.1673 27.5339 21.1673 25.833V12.9163C21.1673 11.2155 19.7848 9.83301 18.084 9.83301Z"
          fill="white"
          stroke="black"
        />
        <path
          d="M9.83398 7.74967V8.24967H10.334H20.6673C21.2199 8.24967 21.7498 8.46917 22.1405 8.85987C22.5312 9.25057 22.7507 9.78047 22.7507 10.333V20.6663V21.1663H23.2507H25.834C26.6517 21.1663 27.436 20.8415 28.0142 20.2633C28.5925 19.685 28.9173 18.9008 28.9173 18.083V5.16634C28.9173 4.34859 28.5925 3.56433 28.0142 2.98609C27.436 2.40786 26.6517 2.08301 25.834 2.08301H12.9173C12.0996 2.08301 11.3153 2.40786 10.7371 2.9861C10.1588 3.56433 9.83398 4.34859 9.83398 5.16634V7.74967Z"
          fill="white"
          stroke="black"
        />
      </svg>
    </div>
  );
}

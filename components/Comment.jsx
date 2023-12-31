export default function Comment({ onClick }) {
  return (
    <div onClick={onClick} className="mb-7 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="27"
        viewBox="0 0 29 27"
        fill="none"
        className="scale-125"
      >
        <path
          d="M0.5 4.58791V4.58854L0.5 16.1699L0.5 16.1705C0.501364 17.2542 0.932491 18.2932 1.69883 19.0596C2.46517 19.8259 3.50415 20.257 4.58791 20.2584H4.58854H15.8162L23.2401 25.4238L24.0257 25.9704V25.0134V20.2258C24.9233 20.1118 25.763 19.7024 26.4083 19.0549C27.1717 18.2889 27.6008 17.2518 27.6018 16.1703V16.1699V4.58854V4.58791C27.6004 3.50415 27.1693 2.46517 26.403 1.69883C25.6366 0.932491 24.5976 0.501364 23.5139 0.5H23.5133L4.58854 0.5L4.58791 0.5C3.50415 0.501364 2.46517 0.932491 1.69883 1.69883C0.932491 2.46517 0.501364 3.50415 0.5 4.58791Z"
          fill="white"
          stroke="black"
        />
      </svg>
    </div>
  );
}

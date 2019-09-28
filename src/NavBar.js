import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.dark};
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 0 0 5px 5px;
    `}
  >
    <Link
      css={css`
        &:hover {
          text-decoration: underline;
        }
      `}
      to="/"
    >
      Adopt Me!
    </Link>
    <span
      css={css`
        display: inline-block;
        animation: 1s ${Spin} linear infinite;
        font-size: 60px;
      `}
      aria-label="logo"
      role="img"
    >
      🐩
    </span>
  </header>
);

export default NavBar;


// Notes Below
// import React, { useState } from "react";
// import { Link } from "@reach/router";
// import { css, keyframes } from "@emotion/core";
// import colors from "./colors";

// const spin = keyframes`
//     to {
//         transfrom:rotate(360deg)
//     }
// `;

// const NavBar = () => {
//   const [padding] = useState(15);
//   return (
//     <header
//       //   onClick={() => setPadding(padding + 15)}
//       css={css`
//         background-color: ${colors.secondary};
//         padding: ${padding}px;
//       `}
//     >
//       <Link to="/">Adopt Me</Link>
//       <span
//         css={css`
//           font-size: 60px;
//           display: inline-block;
//           animation: 1s ${spin} linear infinite;
//           &:hover {
//             text-decoration: underline;
//             animation: 1s ${spin} linear infinite;
//           }
//         `}
//         role="img"
//         aria-label="logo"
//       >
//         🐩
//       </span>
//     </header>
//   );
// };

// export default NavBar;

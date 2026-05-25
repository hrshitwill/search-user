// import { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };

//     case "decrement":
//       return { count: state.count - 1 };

//     case "reset":
//       return initialState;

//     default:
//       throw new Error("Unknown action");
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const isPositive = state.count > 0;
//   const isNegative = state.count < 0;

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <p style={styles.label}>COUNT</p>

//         <p
//           style={{
//             ...styles.count,
//             color: isPositive
//               ? "#4ade80"
//               : isNegative
//               ? "#f87171"
//               : "#e2e8f0",
//           }}
//         >
//           {state.count}
//         </p>

//         <div style={styles.buttonRow}>
//           <button
//             style={{ ...styles.btn, ...styles.btnSecondary }}
//             onClick={() => dispatch({ type: "decrement" })}
//           >
//             -
//           </button>

//           <button
//             style={{ ...styles.btn, ...styles.btnReset }}
//             onClick={() => dispatch({ type: "reset" })}
//           >
//             Reset
//           </button>

//           <button
//             style={{ ...styles.btn, ...styles.btnPrimary }}
//             onClick={() => dispatch({ type: "increment" })}
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "#0f172a",
//     fontFamily: "Arial",
//   },

//   card: {
//     background: "#1e293b",
//     padding: "40px",
//     borderRadius: "16px",
//     textAlign: "center",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//   },

//   label: {
//     color: "#94a3b8",
//     letterSpacing: "3px",
//     fontSize: "14px",
//   },

//   count: {
//     fontSize: "80px",
//     margin: "20px 0",
//     fontWeight: "bold",
//   },

//   buttonRow: {
//     display: "flex",
//     gap: "10px",
//     justifyContent: "center",
//   },

//   btn: {
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "18px",
//   },

//   btnPrimary: {
//     background: "#22c55e",
//     color: "white",
//   },

//   btnSecondary: {
//     background: "#ef4444",
//     color: "white",
//   },

//   btnReset: {
//     background: "#64748b",
//     color: "white",
//   },
// };
// import useCounter
// from "./hooks/useCounter";

// function App() {

//   const {
//     count,
//     increment,
//     decrement
//   } = useCounter();

//   return (

//     <div>

//       <h1>{count}</h1>

//       <button
//         onClick={increment}
//       >
//         +
//       </button>

//       <button
//         onClick={decrement}
//       >
//         -
//       </button>

//     </div>

//   );

// }

// export default App;
import useFetch from "./hooks/useFetch";

function App() {

  const {
    data,
    loading
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if(loading) {

    return <h1>
      Loading...
    </h1>;

  }

  return (

    <ul>

      {data.map(user => (

        <li key={user.id}>
          {user.name}
        </li>

      ))}

    </ul>

  );

}
export default App;
// import { useEffect, useState } from 'react';

// const VisitTracker = () => {
//   const [visitCount, setVisitCount] = useState(0);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       let count = localStorage.getItem('visitCount');
//       count = count ? parseInt(count) : 0; // Parse the count from localStorage
//       if (count === 0) {
//         // If count is 0, this is the first visit
//         count = 1;
//         localStorage.setItem('visitCount', count.toString());
//       }
//       setVisitCount(count); // Update visitCount state
//     }
//   }, []);

//   return <h1>{visitCount}</h1>;
// };

// export default VisitTracker;

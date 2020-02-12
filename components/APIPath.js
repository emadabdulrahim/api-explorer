// /** @jsx jsx */
// import { jsx } from 'theme-ui'
// import { Card } from '../components'

// const ResourceEndPoint = ({ path, methods }) => {
//   const verbs = Object.keys(methods)

//   return (
//     <Card sx={{ padding: 6 }}>
//       {verbs.map(v => {
//         return (
//           <div>
//             <div>
//               <span
//                 sx={{
//                   paddingX: 5,
//                   paddingY: 1,
//                   backgroundColor: 'background.lighter',
//                   borderRadius: 'pill',
//                   fontFamily: 'monospace',
//                 }}
//               >
//                 {v}
//               </span>
//             </div>
//             <div>{path}</div>
//             <div>{methods[v].summary}</div>
//           </div>
//         )
//       })}
//     </Card>
//   )
// }

// export { ResourceEndPoint }

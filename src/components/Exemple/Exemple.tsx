import * as React from "react";

export interface IExemple { title: string; }

export const Exemple = (props: IExemple) => <h1>{`${props.title}!`}</h1>;

// export class Exemple extends React.Component<Exemple, {}> {
//   render() {
//       return <h1>{`${props.title}!`}</h1>;
//   }
// }

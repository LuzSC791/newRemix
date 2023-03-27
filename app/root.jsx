import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Trolley from "./routes/Trolley"
import globalStyles from '~/styles/index.css'
import catalogueStyles from '~/styles/catalogue.css'
import viewStyles from '~/styles/viewProduct.css'
import trolleyStyles from '~/styles/trolley.css'
import {FaShoppingCart} from 'react-icons/fa'
import { useState } from "react";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
// rafc
export const links = () =>([
  {
    rel:'stylesheet',
    href: globalStyles
  },
  {
    rel:'stylesheet',
    href: catalogueStyles
  },
  {
    rel:'stylesheet',
    href: viewStyles
  },
  {
    rel:'stylesheet',
    href: trolleyStyles
  }
]);

export default function App() {
  const [numProducts, setnumProducts] = useState(0)
  const [deploy, setDeploy] = useState(true)
  const numberProducts = (number) =>{
    setnumProducts(number);
  }

  const deployTrolley = () =>{
    setDeploy(!deploy)
  }
  console.log(deploy);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="header">
          <h2 className="title">ECOMMERCE</h2>
          <div className="btn-trolley">
            <div className="number"><span>{numProducts}</span></div>
            <FaShoppingCart className="trolleyNumber" onClick={deployTrolley} size={25}/>
          </div>
        </div>
            {
                deploy && <Trolley onNumProducts={numberProducts}/>
            }

          {/* <div className="container">
            <Catalogue/>
            <ViewProduct/>
          </div> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}




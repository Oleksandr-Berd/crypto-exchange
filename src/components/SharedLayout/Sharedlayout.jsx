import { Suspense } from "react";
import { Dna } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const SharedLayout = () => {
    return (
        <div>
            <Header/>
        <Suspense
          fallback={
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    );
}
 
export default SharedLayout;
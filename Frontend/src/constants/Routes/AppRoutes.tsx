
import Mounted from "../../components/shared/layout/mounted";
import { Templates } from "../../templates";
import ROUTESPATH from "../RoutePath/path";
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";

const AppRoutes= ()=> {
  
    return(
     <BrowserRouter>
       <Routes>
        <Route index element={<Templates.HomeTemplate />}/>
        <Route path={ROUTESPATH.Auth.LOGIN} element={<Templates.Auth.LoginTemplate />}/>
        <Route path={ROUTESPATH.Auth.REGISTER} element={<Templates.Auth.RegisterTemplete />}/>
        <Route path={ROUTESPATH.Auth.FORGET_PASSWORD} element={<Templates.Auth.ForgetTemlate />}/>
       
       <Route element={
         <Mounted>
           <Outlet></Outlet>
         </Mounted>
       }>
         <Route path={ROUTESPATH.Product.REGISTER} element={<Templates.ProductTemplate.ProductNew />}/>
  
         <Route path={ROUTESPATH.HOME} element={<Templates.HomeTemplate />}/>
       </Route>
       </Routes>
     </BrowserRouter>
    );
}

export default AppRoutes;
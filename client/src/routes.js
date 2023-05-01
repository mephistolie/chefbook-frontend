import Home from "./pages/Home";
import {HOME_ROUTE, PRIVACY_ROUTE} from "./utils/consts";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PRIVACY_ROUTE,
        Component: PrivacyPolicy
    }
]

import Home from "./pages/Home";
import {EULA_ROUTE, HOME_ROUTE, PRIVACY_ROUTE, PROFILE_DELETION} from "./utils/consts";
import EULA from "./pages/EULA";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProfileDeletion from "./pages/ProfileDeletion";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: EULA_ROUTE,
        Component: EULA,
    },
    {
        path: PRIVACY_ROUTE,
        Component: PrivacyPolicy
    },
    {
        path: PROFILE_DELETION,
        Component: ProfileDeletion
    }
]

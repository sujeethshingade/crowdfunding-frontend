import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
/*import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";*/

var routes = [
 {
    path: "/explore-campaigns",
    name: "Explore Campaigns",
    //rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/my-campaigns",
    name: "My Campaigns",
    //rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/start-campaign",
    name: "Start Campaign",
    //rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: <Map />,
    layout: "/admin",
  },
/* 
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: <Typography />,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: <Rtl />,
    layout: "/rtl",
  },
*/
];
export default routes;

import Index from "views/Index.js";
// import Analytics from "views/examples/Analytics.js";
import StudentDashboard from "views/examples/StudentDashboard";
import Profile from "views/examples/Profile";

var studentRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/student",
  },
  {
    path: "/studentDashboard",
    name: "Take Examination",
    icon: "ni ni-single-copy-04 text-blue",
    component: StudentDashboard,
    layout: "/student",
  },
  {
    path: "/user-profile",
    name: "Profile",
    icon: "ni ni-single-02 text-red",
    component: Profile,
    layout: "/student",
  },
];
export default studentRoutes;

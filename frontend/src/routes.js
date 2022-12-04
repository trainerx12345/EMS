import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";
import Analytics from "views/examples/Analytics.js";
import CreateExam from "views/examples/CreateExam";
import StudentDashboard from "views/examples/StudentDashboard";
import StudentList from "views/examples/StudentList";
// import Home from "views/examples/Home";
import Profile from "views/examples/Profile";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/createExam",
    name: "Create Exam",
    icon: "ni ni-single-copy-04 text-blue",
    component: CreateExam,
    layout: "/admin",
  },
  {
    path: "/studentlist",
    name: "List of Students",
    icon: "ni ni-archive-2 text-orange",
    component: StudentList,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Analytics",
    icon: "ni ni-sound-wave text-red",
    component: Analytics,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Profile",
    icon: "ni ni-single-02 text-red",
    component: Profile,
    layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;

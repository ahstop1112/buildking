import React from "react";
import async from "../components/Async";

import {
  Briefcase,
  User,
} from "react-feather";

// Auth components
const SignIn = async(() => import("../pages/SignIn"));
const ResetPassword = async(() => import("../pages/ResetPasswordPage"));
const Page404 = async(() => import("../pages/Page404"));
const Page500 = async(() => import("../pages/Page500"));

// Pages components
const ProjectPage = async(() => import("../pages/ProjectPage"));
const DivisionPage = async (() => import("../pages/DivisionPage"));
const FormPage = async (() => import("../pages/FormPage"));
const FormTemplatePage = async(() => import("../pages/FormTemplatePage"));
const FormTypePage = async(() => import("../pages/FormTypePage"));
const UserPage = async(() => import("../pages/UserPage"));
const RolePage = async(() => import("../pages/RolePage"));

//Project
const projectRoutes = {
  id: "Project",
  path: "/web/admin/project",
  icon: <Briefcase />,
  badge: "8",
  component: ProjectPage,
  children: null,
  isShown: true
};

const projectAddRoutes = {
  id: "ProjectsAdd",
  path: "/web/admin/project/add",
  icon: <Briefcase />,
  badge: "8",
  component: ProjectPage,
  children: null,
  isShown: false
};

const projectEditRoutes = {
  id: "ProjectsEdit",
  path: "/web/admin/project/edit/:projectId",
  icon: <Briefcase />,
  badge: "8",
  component: ProjectPage,
  children: null,
  isShown: false
};

//Division
const divisionRoutes = {
  id: "Divisions",
  path: "/web/admin/project/:projectId/division",
  icon: <Briefcase />,
  component: DivisionPage,
  children: null,
  isShown: false
}

const divisionAddRoutes = {
  id: "ProjectsAdd",
  path: "/web/admin/project/:projectId/division/add",
  icon: <Briefcase />,
  badge: "8",
  component: DivisionPage,
  children: null,
  isShown: false
};

const divisionEditRoutes = {
  id: "DivisionEdit",
  path: "/web/admin/project/:projectId/division/edit/:divisionId",
  icon: <Briefcase />,
  badge: "8",
  component: DivisionPage,
  children: null,
  isShown: false
};

//Form
const formRoutes = {
  id: "Form",
  path: "/web/admin/project/:projectId/division/:divisionId/form",
  icon: <Briefcase />,
  component: FormPage,
  children: null,
  isShown: false
}

//FormTemplates
const formTemplateRoutes = {
  id: "Form Template",
  path: "/web/admin/form-template",
  icon: <Briefcase />,
  component: FormTemplatePage,
  children: null,
  isShown: true
}

const formTemplateAddRoutes = {
  id: "Form Templates",
  path: "/web/admin/form-template/add",
  icon: <Briefcase />,
  component: FormTemplatePage,
  children: null,
  isShown: false
}

const formTemplateEditRoutes = {
  id: "Form Templates",
  path: "/web/admin/form-template/edit/:formTemplateId",
  icon: <Briefcase />,
  component: FormTemplatePage,
  children: null,
  isShown: false
}

//Form Types
const formTypeRoutes = {
  id: "Form Type",
  path: "/web/admin/form-type",
  icon: <Briefcase />,
  component: FormTypePage,
  children: null,
  isShown: true
}

const formTypeAddRoutes = {
  id: "FormTypes",
  path: "/web/admin/form-type/add",
  icon: <Briefcase />,
  component: FormTypePage,
  children: null,
  isShown: false
}

const formTypeEditRoutes = {
  id: "FormTypes",
  path: "/web/admin/form-type/edit/:formTypeId",
  icon: <Briefcase />,
  component: FormTypePage,
  children: null,
  isShown: false
}

//Role
const roleRoutes = {
  id: "Roles",
  path: "/web/admin/role",
  icon: <User />,
  component: RolePage,
  children: null,
  isShown: true
}

const roleAddRoutes = {
  id: "Role",
  path: "/web/admin/role/add",
  icon: <User />,
  component: RolePage,
  children: null,
  isShown: false
}

const roleEditRoutes = {
  id: "Role",
  path: "/web/admin/role/edit/:roleId",
  icon: <User />,
  component: RolePage,
  children: null,
  isShown: false
}

//User
const userRoutes = {
  id: "Users",
  path: "/web/admin/user",
  icon: <User />,
  component: UserPage,
  children: null,
  isShown: true
}

const userAddRoutes = {
  id: "Role",
  path: "/web/admin/user/add",
  icon: <User />,
  component: UserPage,
  children: null,
  isShown: false
}

const userEditRoutes = {
  id: "Role",
  path: "/web/admin/user/edit/:userId",
  icon: <User />,
  component: UserPage,
  children: null,
  isShown: false
}

const SignInRoutes = {
  id: "SignIn",
  path: "/web/admin/signin",
  icon: <User />,
  component: SignIn,
  children: null,
  isShown: false
}

const ResetPasswordRoutes = {
  id: "ResetPassword",
  path: "/web/admin/reset-password",
  icon: <User />,
  component: ResetPassword,
  children: null,
  isShown: false
}

const Page404Routes = {
  id: "Page404",
  path: "/web/admin/404",
  icon: <User />,
  component: Page404,
  children: null,
  isShown: false
}

const Page500Routes = {
  id: "Page500",
  path: "/web/admin/500",
  icon: <User />,
  component: Page500,
  children: null,
  isShown: false
}

// const authRoutes = {
//   id: "Auth",
//   path: "/auth",
//   icon: <Users />,
//   children: [
//     {
//       path: "/auth/sign-in",
//       name: "Sign In",
//       component: SignIn
//     },
//     {
//       path: "/auth/sign-up",
//       name: "Sign Up",
//       component: SignUp
//     },
//     {
//       path: "/auth/reset-password",
//       name: "Reset Password",
//       component: ResetPassword
//     },
//     {
//       path: "/auth/404",
//       name: "404 Page",
//       component: Page404
//     },
//     {
//       path: "/auth/500",
//       name: "500 Page",
//       component: Page500
//     }
//   ],
//   component: null,
//   isShown: false
// };

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  projectRoutes,
  projectAddRoutes,
  projectEditRoutes,
  divisionRoutes,
  divisionAddRoutes,
  divisionEditRoutes,
  formRoutes,
  formTemplateRoutes,
  formTemplateAddRoutes,
  formTemplateEditRoutes,
  formTypeRoutes,
  formTypeAddRoutes,
  formTypeEditRoutes,
  roleRoutes,
  roleAddRoutes,
  roleEditRoutes,
  userRoutes,
  userAddRoutes,
  userEditRoutes,
  SignInRoutes,
  Page404Routes,
  Page500Routes,
  ResetPasswordRoutes
];

// Routes using the Auth layout
// export const authLayoutRoutes = [authRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  projectRoutes,
  divisionRoutes,
  formTemplateRoutes,
  formRoutes,
  formTypeRoutes,
  userRoutes,
  roleRoutes,
  SignInRoutes,
  Page404Routes,
  Page500Routes
];

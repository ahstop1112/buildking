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
const FormTemplatesPage = async(() => import("../pages/FormTemplatePage"));
const FormTypePage = async(() => import("../pages/FormTypePage"));
const UserPage = async(() => import("../pages/UserPage"));
const RolePage = async(() => import("../pages/RolePage"));

//Project
const projectsRoutes = {
  id: "Projects",
  path: "/web/admin/projects",
  icon: <Briefcase />,
  badge: "8",
  component: ProjectPage,
  children: null,
  isShown: true
};

const projectAddRoutes = {
  id: "ProjectsAdd",
  path: "/web/admin/projects/add",
  icon: <Briefcase />,
  badge: "8",
  component: ProjectPage,
  children: null,
  isShown: false
};

const projectEditRoutes = {
  id: "ProjectsEdit",
  path: "/web/admin/projects/edit/:projectId",
  icon: <Briefcase />,
  badge: "8",
  component: ProjectPage,
  children: null,
  isShown: false
};

//Division
const divisionsRoutes = {
  id: "Divisions",
  path: "/web/admin/projects/:projectId/divisions",
  icon: <Briefcase />,
  component: DivisionPage,
  children: null,
  isShown: false
}

const divisionAddRoutes = {
  id: "ProjectsAdd",
  path: "/web/admin/projects/:projectId/divisions/add",
  icon: <Briefcase />,
  badge: "8",
  component: DivisionPage,
  children: null,
  isShown: false
};

const divisionEditRoutes = {
  id: "DivisionEdit",
  path: "/web/admin/projects/:projectId/divisions/edit/:divisionId",
  icon: <Briefcase />,
  badge: "8",
  component: DivisionPage,
  children: null,
  isShown: false
};

//Form
const formRoutes = {
  id: "Form",
  path: "/web/admin/projects/:projectId/divisions/:divisionsId/forms",
  icon: <Briefcase />,
  component: FormPage,
  children: null,
  isShown: false
}

//FormTemplates
const formTemplateRoutes = {
  id: "Form Templates",
  path: "/web/admin/form-templates",
  icon: <Briefcase />,
  component: FormTemplatesPage,
  children: null,
  isShown: true
}

const formTemplateAddRoutes = {
  id: "Form Templates",
  path: "/web/admin/form-templates/add",
  icon: <Briefcase />,
  component: FormTemplatesPage,
  children: null,
  isShown: false
}

const formTemplateEditRoutes = {
  id: "Form Templates",
  path: "/web/admin/form-templates/edit/:formTemplatesId",
  icon: <Briefcase />,
  component: FormTemplatesPage,
  children: null,
  isShown: false
}

//Form Types
const formTypeRoutes = {
  id: "Form Types",
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
  path: "/web/admin/form-type/:formTypesId",
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

//Role
const userRoutes = {
  id: "Users",
  path: "/web/admin/user",
  icon: <User />,
  component: UserPage,
  children: null,
  isShown: true
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
  projectsRoutes,
  projectAddRoutes,
  projectEditRoutes,
  divisionsRoutes,
  divisionAddRoutes,
  divisionEditRoutes,
  formRoutes,
  formTemplateRoutes,
  formTemplateAddRoutes,
  formTemplateEditRoutes,
  formTypeRoutes,
  // formTypesAddRoutes,
  // formTypesEditRoutes,
  roleRoutes,
  roleAddRoutes,
  roleEditRoutes,
  userRoutes,
  SignInRoutes,
  Page404Routes,
  Page500Routes,
  ResetPasswordRoutes
];

// Routes using the Auth layout
// export const authLayoutRoutes = [authRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  projectsRoutes,
  divisionsRoutes,
  formTemplateRoutes,
  formRoutes,
  formTypeRoutes,
  userRoutes,
  roleRoutes,
  SignInRoutes,
  Page404Routes,
  Page500Routes
];

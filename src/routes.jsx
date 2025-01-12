import { Home, Profile, SignIn, SignUp, Gallery, Contact } from "@/pages";

export const routes = [
  {
    name: "घर(home)",
    path: "/home",
    element: <Home />,
  },
  {
    name: "गैलरी(gallery)",
    path: "/gallery",
    element: <Gallery />,
  },
  /*
  {
    name: "हमसे संपर्क करें(contact)",
    path: "/contact",
    element: <Contact />,
  },
  */
  /*
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
  */
];

export default routes;

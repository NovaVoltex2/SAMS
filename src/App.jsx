import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateClass from "./pages/Operations/CreateClass";
import GenerateReport from "./pages/Operations/GenerateReport";
import ClassDetails from "./pages/Operations/ClassDetails";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen relative" style={{backgroundImage:"url('/bg.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}>
        <ThemeProvider defaultTheme="system">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="create" element={<CreateClass />} />
              <Route path="generate/:id" element={<GenerateReport />} />
              <Route path="details/:id" element={<ClassDetails />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;

import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  EcommercePage,
  OrdersPage,
  CalenderPage,
  EmployeesPage,
  StackedPage,
  PyramidPage,
  CustomersPage,
  KanbanPage,
  AreaPage,
  PiePage,
  FinancialPage,
  ColorMappingPage,
  ColorPickerPage,
  EditorPage,
  LinePage,
  BarPage,
} from "./pages";
import { useStateContext } from "./context/ContextProvider";

function App(props) {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="top">
              <button
                type="button"
                onClick={() => {
                  setThemeSettings(true);
                }}
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  background: currentColor,
                  borderRadius: "50%",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              {/*{themeSettings && (<ThemeSettings />)}*/}

              {/*  Routes Section  */}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<EcommercePage />} />
                <Route path="/ecommerce" element={<EcommercePage />} />

                {/* Pages */}
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/employees" element={<EmployeesPage />} />
                <Route path="/customers" element={<CustomersPage />} />

                {/* Apps */}
                <Route path="/kanban" element={<KanbanPage />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/calendar" element={<CalenderPage />} />
                <Route path="/color-picker" element={<ColorPickerPage />} />

                {/* Charts */}
                <Route path="/line" element={<LinePage />} />
                <Route path="/area" element={<AreaPage />} />
                <Route path="/bar" element={<BarPage />} />
                <Route path="/pie" element={<PiePage />} />
                <Route path="/financial" element={<FinancialPage />} />
                <Route path="/color-mapping" element={<ColorMappingPage />} />
                <Route path="/pyramid" element={<PyramidPage />} />
                <Route path="/stacked" element={<StackedPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
    /*<div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  background: "blue",
                  borderRadius: "50%",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>

          {/!*  Routes Section  *!/}
          <Routes>
            {/!* Dashboard *!/}
            <Route path="/" element={<EcommercePage />} />
            <Route path="/ecommerce" element={<EcommercePage />} />

            {/!* Pages *!/}
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/customers" element={<CustomersPage />} />

            {/!* Apps *!/}
            <Route path="/kanban" element={<KanbanPage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/calender" element={<CalenderPage />} />
            <Route path="/color-picker" element={<ColorPickerPage />} />

            {/!* Charts *!/}
            <Route path="/line" element={<LinePage />} />
            <Route path="/area" element={<AreaPage />} />
            <Route path="/bar" element={<BarPage />} />
            <Route path="/pie" element={<PiePage />} />
            <Route path="/financial" element={<FinancialPage />} />
            <Route path="/color-mapping" element={<ColorMappingPage />} />
            <Route path="/pyramid" element={<PyramidPage />} />
            <Route path="/stacked" element={<StackedPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>*/
  );
}

export default App;

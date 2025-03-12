import { Routes, Route } from "react-router-dom";
import Accounts from "./components/Accounts";
import Chrono from "./components/Chrono";
import Integration from "./components/Integration";
import KnowledgeConfiguration from "./components/KnowledgeConfiguration";
import Subscription from "./components/Subscription";
import Home from "./components/Home";
import Performance from "./components/Performance";
import SettingComp from "./components/SettingComp"



function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/chrono" element={<Chrono />} />
      <Route path="/integration" element={<Integration />} />
      <Route path="/knowledgeConfiguration" element={<KnowledgeConfiguration />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/setting" element={<SettingComp/>}/>
    </Routes>
  );
}

export default AppRouter;

import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouter from "./AppRouter";
import './App.css';
import SideNav from "./SideNav";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
      <div className="mainPage">
       <div>
        <SideNav/>
       </div>
       
      </div>
   
  );
}

export default App;
/**
 * 
 * 
 <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
 <nav>
   <ul className="space-y-2">
     <li>
       <Link to="/" className="block p-3 rounded hover:bg-gray-200">
         Home
       </Link>
     </li>
     <li>
       <Link to="/accounts" className="block p-3 rounded hover:bg-gray-200">
         Accounts
       </Link>
     </li>
     <li>
       <Link to="/chrono" className="block p-3 rounded hover:bg-gray-200">
         Chrono
       </Link>
     </li>
   </ul>
 </nav>
</aside>

{/* Main Content 
<main className="flex-1 p-6">
 <AppRouter />
</main>

 */

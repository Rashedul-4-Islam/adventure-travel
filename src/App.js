import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/LoginSystem/Register/Register';
import Login from './Components/LoginSystem/Login/Login';
import PrivateRoute from './Components/LoginSystem/PrivateRoute/PrivateRoute';
import Review from './Components/DashBoard/Review/Review';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import DashBoardHome from './Components/DashBoard/DashBoardHome/DashBoardHome';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ManageBlog from './Components/Admin/ManageBlog/ManageBlog';
import BlogPost from './Components/Admin/BlogPost/BlogPost';
import Post from './Components/DashBoard/Post/Post';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
          <Header/>
           <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/blogDetails/:id" element={<PrivateRoute><BlogDetails/></PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><DashBoard/></PrivateRoute>}>
                  
                  <Route exact path="/dashboard" element={<DashBoardHome/>}> </Route>
                  <Route path={`/dashboard/post`} element={<Post/>}/>   
                  <Route path={`/dashboard/review`} element={ <Review/>}/>  
                  <Route path={`/dashboard/makeadmin`} element={<MakeAdmin/>} />
                <Route path={`/dashboard/manageBlog`} element={<ManageBlog/>}></Route> 
                <Route path={`/dashboard/blogPost`} element={<BlogPost/>}></Route>
                  {/* <Route path={`/dashboard/userorders`} element={<AllOrders/>} />
                   */}   
            </Route>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
           </Routes>
           <Footer/>
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;

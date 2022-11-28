import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from './component/main_page/main_page';
import AboutStudent from './component/teacher_page/about_dtudent';
import TeacherMainPage from './component/teacher_page/teacher_main_page';
import Login   from'./component/Login'
import Register  from'./component/Register'
import MainStudentPage from './component/student_page/student_main_page';
import ProgressMainCard from './component/student_page/progress_main_card'
import YourAccunt from './component/your_account';
import { AppProduct } from './component/productsComps/appProduct';
import { MovieInfo } from './component/productsComps/productInfo';
import About_cours from './component/list of courses/about_cours';
import Pay from './component/list of courses/pay';

function AppRoutes() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/MainStudentPage" element={<MainStudentPage/>}></Route>
                <Route path="/ProgressMainCard " element={<ProgressMainCard />}></Route>
                <Route path="/TeacherMainPage" element={<TeacherMainPage />}></Route>
                <Route path="/AboutStudent" element={<AboutStudent />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/YourAccunt" element={<YourAccunt/>}></Route>
                <Route path="/AboutCourse/:corseNumber" element={<About_cours/>}></Route>
                <Route path="/AppProduct" element={<AppProduct/>}></Route>
                <Route path="/AppProduct/info/:id" element={<MovieInfo/>}></Route>
                <Route path="/Pay" element={<Pay/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
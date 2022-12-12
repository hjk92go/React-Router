import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const About = () => {
    const navigator = useNavigate();
    return ( 
        <div>
            <h3>아래 버튼을 누르면 Home으로 돌아갑니다</h3>
            <button onClick={()=> navigator("/Home")}>Home으로가기</button>

        </div>
     );
}
 
export default About;
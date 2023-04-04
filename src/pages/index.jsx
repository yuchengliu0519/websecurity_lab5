import { Link, Outlet } from "react-router-dom";
export default function RootLayout() {
    return (
        <div id="DIV_BIG">
            <Link to="/">Home</Link> | <Link to="/About">OTHER</Link>
            <Outlet />
        </div>
    );
}
export function RootIndex() {
    return (
        <div id="DIV_ROOT">
            <h1>劉育誠</h1>
            <img src="./src/pages/pic1.jpg" width="200" height="200" position="absolute" left="0px" top="200px"></img>
            <div id="DIV_RIGHT">
                <h3>關於學業</h3>
                <ul>
                    <li>台大電機所碩一</li>
                    <li>指導教授:黃俊郎</li>
                </ul>

                <h3>會的技能</h3>
                <ul>
                    <li>c/c++</li>
                    <li>python</li>
                    <li>matlab</li>
                    <li>verilog</li>
                </ul>
            </div>
        </div>
    );
}

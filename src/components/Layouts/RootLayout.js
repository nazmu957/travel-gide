import {
  FacebookFilled,
  LinkedinFilled,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Space } from "antd";
const { Content } = Layout;
import Link from "next/link";
import { AuthContext } from "../../contexts/UserContext";
import { useContext } from "react";


const RootLayout = ({ children }) => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          backgroundColor: "#1A2C48",
          height: "2.5rem",
        }}
      >
        <div
          style={{ marginLeft: "2rem", fontSize: "1.2rem" }}
          className="flex"
        >
          <Space>
            <FacebookFilled className="text-white" />
            <div
              className="text-white"
              style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
            >
              <LinkedinFilled />
            </div>
            <YoutubeOutlined className="text-white" />
          </Space>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "2rem",
          }}
        >
          <div
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1rem",
              marginBottom: ".3rem",
            }}
          >
            <PhoneOutlined />
          </div>
          <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/profile"
            ></Link>

            {user?.uid ? (
              <items>
                <Button onClick={logOut} type="primary" danger>
                  Logout
                </Button>
              </items>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/LoginForm"
              >
                <p>Login</p>
              </Link>
            )}
          </div>

          <div>
            <Link href={"/RegistrationForm"}>
              <p style={{ textDecoration: "none", color: "white" }}>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
      {/* Main Nav Part */}

      <div style={{ height: "6rem" }} className="navbar  bg-red-50">
        <div className="navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/service"}>Service</Link>
              </li>

              <li>
                <Link href={"/booking"}>Booking</Link>
              </li>

              <li>
                <Link href={"/user"}>Profile</Link>
              </li>
              <li>
                <Link href={"/feedback"}>Feedback</Link>
              </li>
              <li>
                <Link href={"/dashbord"}>Dashboard</Link>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn btn-ghost normal-case text-xl font-serif text-black"
          >
            Travel-Gide
          </Link>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-serif font-bold">
            <li>
              <Link className="text-black" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-black" href={"/service"}>
                Service
              </Link>
            </li>

            <li>
              <Link className="text-black" href={"/booking"}>
                Booking
              </Link>
            </li>

            <li>
              <Link className="text-black" href={"/user"}>
                Profile
              </Link>
            </li>
            <li>
              <Link className="text-black" href={"/feedback"}>
                Feedback
              </Link>
            </li>

            <li>
              <Link className="text-black" href={"/dashbord"}>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </div>

      <Content
        style={{
          padding: "0 40px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>
      <footer
        style={{ padding: "5rem" }}
        className="footer p-10 bg-[#1A2D48] text-base-content"
      >
        <nav className="text-white">
          <header className="footer-title text-white">Services</header>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title">Company</header>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title">Legal</header>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title text-white">Newsletter</header>
          <fieldset className="form-control w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary bg-[#1A2D48] absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </Layout>
  );
};
export default RootLayout;

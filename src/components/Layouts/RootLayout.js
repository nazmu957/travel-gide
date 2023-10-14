import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Space } from "antd";
const { Content } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

  console.log(session);
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
            <FacebookFilled />
            <div style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>
              <LinkedinFilled />
            </div>
            <YoutubeOutlined />
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
            {session?.user ? (
              <items>
                <Button onClick={() => signOut()} type="primary" danger>
                  Logout
                </Button>
              </items>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/login"
              >
                <p>Login</p>
              </Link>
            )}
          </div>
          <div>
            <p style={{ textDecoration: "none", color: "white" }}>Sign Up</p>
          </div>
        </div>
      </div>
      {/* Main Nav Part */}

      <div style={{ height: "6rem" }} className="navbar  bg-red-100">
        <div className="navbar-start">
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
                <Link href={"/service"}>Service</Link>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">Travel-Gide</Link>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/service"}>Service</Link>
            </li>

            <li>
              <a>Item 3</a>
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
          padding: "0 20px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>
      <footer
        style={{ padding: "5rem" }}
        className="footer p-10 bg-base-200 text-base-content"
      >
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
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

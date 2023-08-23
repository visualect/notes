import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";

export default function Layout() {
  return (
    <main className="bg-black text-gray-50 h-screen">
      <Container>
        <Header />
        <Outlet />
      </Container>
    </main>
  );
}

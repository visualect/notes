import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <main className="bg-[#161616] text-[#ededed] min-h-screen">
      <Container>
        <Toaster position="top-right" />
        <Header />
        <Outlet />
      </Container>
    </main>
  );
}

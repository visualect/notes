import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import { Toaster } from "sonner";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main className="bg-[#0e0e0e] text-[#ededed] min-h-screen px-4">
      <Container>
        <Toaster position="top-right" />
        <div className="flex flex-col content-between min-h-screen">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Container>
    </main>
  );
}

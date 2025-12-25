import Menu_Bar from "@/components/menu_bar/menu_bar";
import Footer from "@/components/footer/footer";

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu_Bar /> 
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
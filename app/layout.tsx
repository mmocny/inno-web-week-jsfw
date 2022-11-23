import Header from './header';
import Footer from './footer';
import NavBar from './navbar';

export default function({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <NavBar></NavBar>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}

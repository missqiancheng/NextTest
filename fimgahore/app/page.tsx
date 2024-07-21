import Header from "../app/header/page"
import CardContent from "../app/cardcontent/page"
import Footer from "../app/footer/page"
import Headertitler from "../app/headertitler/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betwee">
      <Headertitler></Headertitler>
      <Header></Header>
      <CardContent></CardContent>
      <Footer></Footer>
    </main>
  );
}

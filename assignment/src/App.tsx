import Header from "./component/Header";
import Banner from "./component/Banner";
import Card from "./component/Card";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <div className="mx-40">
        <Card/>  
        <Footer />
      </div>
    </div>
  )
}

export default App


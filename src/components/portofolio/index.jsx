import { portfolioList } from "../data/index";
import "./style.css";

function Index() {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Portofolio</h3>
        <div className="grid">
          {portfolioList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.title} />
                </a>
                <h4>{item.title}</h4> {/* Menampilkan judul */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Index;

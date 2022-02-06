import Navigation from "../components/navigation";
import Footer from "../components/footer";
import ServiceDiv from "../components/services";
import { dbWorks } from "../base/db";

function HeroDiv() {
  return <ServiceDiv></ServiceDiv>;
}

function WorkDiv(work) {
  return (
    <div class="work-card">
      <img src={work.img} alt="" class="card-image" />
      <div class="info">
        <p>{work.info.title}</p>
        <h6>{work.info.custome}</h6>
        <button data-target="project-details" class="modal-view">
          Read more
        </button>
      </div>
    </div>
  );
}

export function OurWork() {
  const works = dbWorks;
  return (
    <div className="work-list">
      <div className="list-1">
          {works.slice(0,2).map(work=>(
              <WorkDiv work={work} key={work.id}/>
          ))}
          </div> 
          <div className="list-2">
          {works.slice(3,).map(work=>(
              <WorkDiv work={work} key={work.id}/>
          ))}
          </div>
    </div>
  );
}

function WorkPage() {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <HeroDiv></HeroDiv>
        
        <Footer></Footer>
      </main>
    </>
  );
}

export default WorkPage;

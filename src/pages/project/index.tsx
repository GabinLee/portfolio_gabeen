import { useState } from 'react';
import { Container } from './style';
import ProjectListView from './ProjectListView.view';
import CareerDescriptionListView from './CareerDescriptionList.view';


export default function ProjectView() {
  const [activeMenu, setActiveMenu] = useState(0)


  return (
    <Container className="project">
      <div className="inner">
        <div className="area menu">
          <button className={activeMenu === 0 ? 'active' : '' }
            onClick={e => setActiveMenu(0)}
          >
            <h1>Career Description</h1>
          </button>
          <button className={activeMenu === 1 ? 'active' : ''}
            onClick={e => setActiveMenu(1)}
          >
            <h1>Portfolio</h1>
          </button>
        </div>
        
        {(activeMenu === 0) && (
          <CareerDescriptionListView />
        )}
        
        {(activeMenu === 1) && (
          <ProjectListView />
        )}
      </div>

    </Container>
  )
}
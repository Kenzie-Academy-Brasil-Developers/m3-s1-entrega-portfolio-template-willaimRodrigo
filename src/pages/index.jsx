import { BannerSection } from "../components/section/BannerSection";
import { AboutSection } from "../components/section/AboutSection";
import { TechSection } from "../components/section/TechSection";
import { ProjectSection } from "../components/section/ProjectSection";
import { DefaulTemplate } from "../components/DefaultTemplate";
import { technologies } from "../data/technologies";
import { projects } from "../data/projects";

export const LandingPage = () => {
    return (
        <>
            < DefaulTemplate>
                <BannerSection />  
                <AboutSection /> 
                <TechSection  technologies={technologies}/>  
                <ProjectSection projects={projects}/>
            </DefaulTemplate>
        </>
    );
};
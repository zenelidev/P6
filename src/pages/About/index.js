import "../../styles/output.css";
import React from "react";
import Banner from "../../components/banner";
import Accordion from "../../components/accordion";

const About = () => {
	const bannerImageSrc = process.env.PUBLIC_URL + "/mountains.png";
	return (
		<div className='container'>
			<Banner imageSrc={bannerImageSrc} />
            
            <div className="mt-2">
			<Accordion
				title='Fiabilité'
				description='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
			/>
			<Accordion
				title='Respect'
				description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.'
			/>
			<Accordion
				title='Service'
				description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.'
			/>
			<Accordion
				title='Sécurité'
				description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes."
			/>
            </div>
		</div>
	);
};

export default About;

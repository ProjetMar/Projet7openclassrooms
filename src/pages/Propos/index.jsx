import Collapse from '../../components/Collapse'
import NaturePP from '../../assets/NaturePP.png'
import Banner from '../../components/banner'

const Caracteristiques = [
  {
    name: 'Fiabilité',
    description:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    name: 'Respect',
    description:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    name: 'Service',
    description:
      'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N ' +
      "'" +
      'hésitez pas à nous contacter si vous avez la moindre question.',
  },
  {
    name: 'Responsabilité',
    description:
      'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l' +
      'hôte qu' +
      'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
  },
]

function Propos() {
  return (
    <div>
      <Banner image={NaturePP} description={''} isPropsPage={true} />
      <div>
        <Collapse
          name={Caracteristiques[0].name}
          description={Caracteristiques[0].description}
        />
        <Collapse
          name={Caracteristiques[1].name}
          description={Caracteristiques[1].description}
        />
        <Collapse
          name={Caracteristiques[2].name}
          description={Caracteristiques[2].description}
        />
        <Collapse
          name={Caracteristiques[3].name}
          description={Caracteristiques[3].description}
        />
      </div>
    </div>
  )
}
export default Propos

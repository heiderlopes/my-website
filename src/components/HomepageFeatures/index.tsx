import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  link: string,
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Android',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: 'android/intro',
    description: (
      <>
        É a plataforma mais usada no mundo para apps móveis, oferecendo flexibilidade, desempenho e suporte a milhões de dispositivos.
      </>
    ),
  },
  {
    title: 'Flutter',
    link: 'flutter/intro',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        É um framework da Google criado para facilitar o desenvolvimento de aplicativos nativos com uma única base de código para Android e iOS.
      </>
    ),
  },
  {
    title: 'Kotlin Multiplataforma',
    link: 'kmm/intro',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Permite compartilhar lógica entre plataformas como Android, iOS e web, acelerando o desenvolvimento com código reutilizável.
      </>
    ),
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>Saiba mais</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

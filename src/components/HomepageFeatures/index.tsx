import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Jetbrains 全家桶',
    Img: "img/products/jetbrains.jpg",
    description: (
      <>
        Jetbrains 全家桶，IDE+任选插件，激活到自己的用户名
      </>
    ),
    link: "docs/jb",
  },
  {
    title: 'Office 全家桶',
    Img: "img/products/office.png",
    description: (
      <>
        Office 全家桶，Office 365，Office 2024，Office 2021，全家桶还送 Project 和 Visio
      </>
    ),
    link: "docs/office",
  },
  {
    title: 'Adobe 全家桶',
    Img: "img/products/adobe.jpg",
    description: (
      <>
        Adobe 全家桶大师版，一键安装
      </>
    ),
    link: "docs/adobe",
  },
];

function Feature({ title, Img, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <img src={Img} className={styles.featureImg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

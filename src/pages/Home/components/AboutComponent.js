import React from 'react';
import Section from 'components/Section/Section';
import SectionContent from './SectionContent';

const LoremIpsum = () => (
  <p>
    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
    ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.
    del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
    de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino
    que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente
    igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las
    cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como
    por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
  </p>
);

const AboutComponent = () => (
  <Section backgroundColor="white">
    <div>
      {/* This will be another component*/}
      <figure>
        {/* Will need a loader for the svg*/}
        <img
          alt="Person running into a laptop"
          src="data:image/png;base64,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"
        />
      </figure>
      <SectionContent title="About">
        <LoremIpsum />
      </SectionContent>
    </div>
  </Section>
);

export default AboutComponent;

import { Box, Typography } from "@mui/material";
import imag from "../../assets/imga";
import CoverImage from "../../components/CoverImage";
import Footer from "../../components/Footer";
import InterviewList from "../../components/InterviewList";

const TextFl = () => {
  return (
    <Box mt="3rem" mb="3rem">
      <Typography
        variant="h4"
        paragraph
        justifyContent="center"
        textAlign="justify"
        sx={{ width: "75%", mx: "auto" }}
      >
        Con el objetivo de tener un repositorio personal, y que alguna persona
        interesada pueda acceder a ellas, a continuación dejo los enlaces de
        algunas entrevistas y notas donde he compartido ideas acerca de
        movilidad urbana (clic en la imagen respectiva para acceder).
      </Typography>
    </Box>
  );
};

const Interview = () => {
  return (
    <Box>
      <CoverImage title="Entrevistas" image={imag.img14} opa="0.3"/>
      <TextFl />
      <InterviewList
        img={imag.img51}
        link="https://intranet.manizales.unal.edu.co/postmaster/2023/postadjunto31745.pdf"
        index="31"
        tema="Ponencia en el XXII PANAM Guayaquil 2023 - Página 6"
        medio="Boletín de Sede UNAL Manizales"
        fecha="Agosto/2023"
      />
      <InterviewList
        img={imag.img50}
        link="https://centrodeinformacion.manizales.gov.co/secretaria-de-movilidad-participo-del-xxi-congreso-internacional-de-transporte-con-un-articulo-de-investigacion/"
        index="30"
        tema="Artículo de seguridad vial con ciencia de datos espaciales"
        medio="Prensa Alcaldía de Manizales"
        fecha="Agosto/2023"
      />
            <InterviewList
        img={imag.img49}
        link="https://www.lapatria.com/informe-especial/manizales-en-mora-con-los-adultos-mayores-se-requieren-mejores-vias-y-servicios-de"
        index="29"
        tema="Movilidad de adultos mayores en Manizales"
        medio="La Patria Manizales"
        fecha="Agosto/2023"
      />
            <InterviewList
        img={imag.img48}
        link="https://www.youtube.com/watch?v=EfPnOK520eI"
        index="28"
        tema="Seguridad en la movilidad, cifras en Caldas - Minuto 3:21"
        medio="La Patria Manizales"
        fecha="Agosto/2023"
      />
            <InterviewList
        img={imag.img47}
        link="https://docs.google.com/viewerng/viewer?url=https://manizalescomovamos.org/wp-content/uploads/2023/08/ICV-2022-Infografia.pdf"
        index="27"
        tema="Informe de Calidad de Vida Manizales 2022 - Pág.50"
        medio="Manizales Cómo Vamos"
        fecha="Agosto/2023"
      />
            <InterviewList
        img={imag.img46}
        link="https://centrodeinformacion.manizales.gov.co/para-proteger-a-los-peatones-intervienen-giro-en-la-avenida-santander-en-el-sector-de-el-cable/"
        index="26"
        tema="Intervención de urbanismo táctico"
        medio="Prensa Alcaldía de Manizales"
        fecha="Julio/2023"
      />
            <InterviewList
        img={imag.img45}
        link="https://www.lapatria.com/economia/sistema-de-bicicletas-publicas-de-manizales-todavia-sin-pedalear?fbclid=IwAR04XD5B1u0UWDLqGTlzXAdhiMl0ZKhxt8gUV4Jz8ZjA_qq0PnJ6bB7PPEo"
        index="25"
        tema="Sistema de Bicicletas Públicas"
        medio="La Patria Manizales"
        fecha="Junio/2023"
      />
            <InterviewList
        img={imag.img44}
        link="https://www.lapatria.com/informe-especial/congestion-vial-cobra-protagonismo-en-accidentes-fatales-experto-en-movilidad?fbclid=IwAR17Glp4HucRyPMyesaGIhLZ_lbpSzQQtDvr_koOkpgNu-_5yKv-lL7tLOE"
        index="24"
        tema="Congestión vial y seguridad en la movilidad"
        medio="La Patria Manizales"
        fecha="Junio/2023"
      />
            <InterviewList
        img={imag.img43}
        link="https://soundcloud.com/juan-esteban-aristizabal-salazar/entrevista-sobre-cifras-de-siniestralidad-vial-en-manizales-y-colombia?si=0b077afe340041fa91fb0ba813ab1048&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        index="23"
        tema="Cifras de siniestralidad vial en Manizales y Colombia"
        medio="UMFM"
        fecha="Mayo/2023"
      />
      <InterviewList
        img={imag.img42}
        link="https://www.facebook.com/Jeas002/posts/3458114481070428"
        index="22"
        tema="Percepción de movilidad Manizales Cómo Vamos"
        medio="La Patria Manizales"
        fecha="Abril/2023"
      />
      <InterviewList
        img={imag.img40}
        link="https://soundcloud.com/umcentral-umfm/movilidad-matutino-marzo-10?si=128d1d0309d5418c8bd152bc29a0b047&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        index="21"
        tema="Entrevista sobre movilidad de mujeres en Manizales"
        medio="UMFM"
        fecha="Marzo/2023"
      />
      <InterviewList
        img={imag.img37}
        link="https://centrodeinformacion.manizales.gov.co/hombres-o-mujeres-quienes-son-mas-prudentes-a-la-hora-de-conducir-les-contamos-en-esta-nota/"
        index="20"
        tema="Movilidad de las mujeres en Manizales"
        medio="Prensa Alcaldía de Manizales"
        fecha="Marzo/2023"
      />
      
      <InterviewList
        img={imag.img16}
        link="https://www.facebook.com/BCNoticiasManizales/videos/1272163050175777"
        index="19"
        tema="Panel sobre movilidad en Manizales"
        medio="BC Noticias"
        fecha="Febrero/2023"
      />
      <InterviewList
        img={imag.img6}
        link="https://ofibicimanizales.com/promovamos-el-uso-de-la-bici-dejemos-los-mitos￼/"
        index="18"
        tema="Mitos en la promoción del uso de la bicicleta"
        medio="Oficina de la Bici Manizales"
        fecha="Enero/2023"
      />
      <InterviewList
        img={imag.img17}
        link="https://open.spotify.com/episode/2kS8dqm2VPtYdpi96vIbyD?si=MzICKAXPQka_TSwIvMOQJQ&utm_source=whatsapp&t=883&nd=1"
        index="17"
        tema="Malparqueo vehicular"
        medio="BC Noticias"
        fecha="Enero/2023"
      />
      <InterviewList
        img={imag.img18}
        link="https://www.semana.com/nacion/manizales/articulo/ojo-asi-sera-el-pico-y-placa-en-manizales-este-martes-17-de-enero/202313/"
        index="16"
        tema="Pico y placa en Manizales"
        medio="Semana"
        fecha="Enero/2023"
      />
      <InterviewList
        img={imag.img19}
        link="https://caracol.com.co/2022/12/28/en-13-anos-el-parque-automotor-de-manizales-casi-se-triplico/"
        index="15"
        tema="Aumento del parque automotor en Manizales"
        medio="Caracol Radio"
        fecha="Diciembre/2022"
      />
      <InterviewList
        img={imag.img20}
        link="https://soundcloud.com/juan-esteban-aristizabal-salazar/entrevista-sobre-movilidad-urbana-en-manizales?si=f4f968f1895b4594b35b1473cb30050c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        index="14"
        tema="Problemas de movilidad urbana y SITP"
        medio="Radio Nacional"
        fecha="Diciembre/2022"
      />
      <InterviewList
        img={imag.img21}
        link="https://centrodeinformacion.manizales.gov.co/cada-cinco-minutos-se-realizan-10-000-viajes-en-carro-y-5-000-en-moto-en-manizales/"
        index="13"
        tema="Congestión vehicular en Manizales"
        medio="Prensa Alcaldía de Manizales"
        fecha="Diciembre/2022"
      />
      <InterviewList
        img={imag.img22}
        link="https://www.facebook.com/ManizalesUniversitario/videos/483281383781258/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&mibextid=2Rb1fB"
        index="12"
        tema="Ciclomovilidad en Manizales"
        medio="Manizales Campus Universitario"
        fecha="Noviembre/2022"
      />
      <InterviewList
        img={imag.img23}
        link="https://www.lapatria.com/denuncie/aprenda-cruzar-las-cebras-recomendaciones-para-peatones-y-ciclistas"
        index="11"
        tema="Cruces peatonales"
        medio="La Patria Manizales"
        fecha="Noviembre/2022"
      />
      <InterviewList
        img={imag.img24}
        link="http://agenciadenoticias.unal.edu.co/detalle/manizales-planifica-la-ciudad-de-15-minutos"
        index="10"
        tema="Investigación sobre Ciudad de 15 minutos"
        medio="Agencia de Noticias UN"
        fecha="Noviembre/2022"
      />
      <InterviewList
        img={imag.img25}
        link="https://twitter.com/je_aristizabal/status/1570510711264276480"
        index="9"
        tema="Evasión del SOAT en Colombia"
        medio="Telecafé Noticias"
        fecha="Septiembre/2022"
      />
      <InterviewList
        img={imag.img26}
        link="https://umcentral.umanizales.edu.co/index.php/dia-de-la-bicicleta-y-sin-carro-manizales-necesita-una-movilidad-sostenible/"
        index="8"
        tema="Movilidad urbana (entre minutos 8:10 a 20:02)"
        medio="UM Radio"
        fecha="Junio/2022"
      />
      <InterviewList
        img={imag.img27}
        link="https://www.facebook.com/BCNoticiasManizales/videos/982478095786323"
        index="7"
        tema="Investigación sobre cruces peatonales"
        medio="BC Noticias"
        fecha="Mayo/2022"
      />
      <InterviewList
        img={imag.img28}
        link="https://archivo.lapatria.com/economia/cuestionan-el-sentido-del-dia-sin-carro-en-manizales-491579"
        index="6"
        tema="Día sin carro y sin moto en Manizales"
        medio="La Patria Manizales"
        fecha="Mayo/2022"
      />
      <InterviewList
        img={imag.img29}
        link="http://agenciadenoticias.unal.edu.co/detalle/avenida-santander-en-manizales-necesita-mas-pasos-de-cebra"
        index="5"
        tema="Investigación sobre cruces peatonales"
        medio="Agencia de Noticias UN"
        fecha="Abril/2022"
      />
      <InterviewList
        img={imag.img30}
        link="https://www.manizales.unal.edu.co/manizales/news/movilidad-sostenible-en-la-ciudad-una-mirada-desde-la-bici/?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5B%40widget_0%5D%5BcurrentPage%5D=3&cHash=8b416ed285730c41581dbff4ad707034"
        index="4"
        tema="Movilidad sostenible"
        medio="Agencia de Noticias UN"
        fecha="Marzo/2022"
      />
      <InterviewList
        img={imag.img31}
        link="https://www.facebook.com/Jeas002/videos/2892011081014107/"
        index="3"
        tema="Intervención ante el Concejo Municipal de Manizales"
        medio="Personal"
        fecha="Abril/2021"
      />
      <InterviewList
        img={imag.img32}
        link="https://www.facebook.com/Jeas002/videos/2741219302759953/"
        index="2"
        tema="Cicloinfraestructura en Manizales"
        medio="Alcaldía de Manizales"
        fecha="Octubre/2020"
      />
      <InterviewList
        img={imag.img33}
        link="https://www.facebook.com/100063654167084/videos/960031044499994"
        index="1"
        tema="Cicloinfraestructura en Manizales"
        medio="Revista Primer Punto"
        fecha="Agosto/2020"
      />

      <Footer />
    </Box>
  );
};

export default Interview;

import { Box } from "@mui/material";
import imag from "../../assets/imga";
import CoverImage from "../../components/CoverImage";
import SeparatorBar from "../../components/SeparatorBar";
import ContactInfo from "../../components/ContactInfo";
import Footer from "../../components/Footer";
import ImageGrid from "../../components/ImageGrid";
import InfoContainer from "../../components/InfoContainer";

const Index = () => {
  return (
    <Box>
      <CoverImage title="Inicio" image={imag.img1} opa="0.3" />
      <InfoContainer img={imag.img5}/>
      <SeparatorBar title="Contacto" />
      <ContactInfo />
      <ImageGrid img1={imag.img4} img2={imag.img35} img3={imag.img34} />
      <Footer />
    </Box>
  );
};

export default Index;

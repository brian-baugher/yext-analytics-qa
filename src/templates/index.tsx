import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
} from "@yext/pages";
import "../index.css";
import { DocumentProvider } from "../hooks/useDocument";
import Banner from "../components/Banner";
import BreadCrumbs from "../components/BreadCrumbs";
import Carousel from "../components/Carousel";
// import Hero from "../components/Hero";
import FAQs from "../components/FAQs";
import FeaturedCategories from "../components/location/FeaturedCategories";
import GoogleMap from "../components/GoogleMap";
import Main from "../components/Main";
import Hero from "../components/location/Hero";

export const config: TemplateConfig = {
  stream: {
    $id: "location",
    filter: {
      entityIds: [1063036074],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "logo",
      "services",
      "photoGallery",
      "paymentOptions",
      "emails",
      "yextDisplayCoordinate",
      "c_heroCTAs"
    ],
    localization: {
      locales: "en",
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.name;
};

export const transformProps: TransformProps<TemplateRenderProps> = async (
  data
) => {
  return {
    ...data,
    document: {
      ...data.document,
    },
  };
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const IndexPage: Template<TemplateRenderProps> = (data) => {
  return (
    <>
      <Main data={data} containerClassName="pb-32">
        <DocumentProvider value={data.document}>
          <div className="centered-container">
            <Hero />
            <FAQs />
          </div>
        </DocumentProvider>
      </Main>
    </>
  );
};

export default IndexPage;

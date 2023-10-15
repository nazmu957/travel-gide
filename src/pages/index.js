import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllProducts from "@/components/UI/AllProducts";
import AllCategories from "@/components/UI/AllCategories";
import { useGetCategoriesQuery } from "@/redux/api/api";
import axios from "axios";
import Testimonial from "@/components/UI/Testimonials";
import AboutUs from "@/components/UI/AboutUs";
import ImageGallery from "@/components/UI/ImageGallery";
import Numbers from "@/components/UI/Numbers";
import Slogan from "@/components/UI/Slogan";
import ScrollToTopButton from "@/components/UI/ScrollToTopButton";

const HomePage = ({ allProducts, allCategories }) => {
  console.log(allProducts);

  const { data, isLoading, isError, error } = useGetCategoriesQuery();

  const categories = data;
  return (
    <>
      <Head>
        <title>Travel-Gide</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/vc6pqZ3/logo.jpg" />
      </Head>
      <Banner />
      <AllProducts allProducts={allProducts} />
      <AllCategories allCategories={allCategories} />
      <ImageGallery />
      <Testimonial />
      <AboutUs />
      <Numbers />
      <Slogan />
      <ScrollToTopButton />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const apiUrl1 = "https://travel-gide-server-nazmu957.vercel.app/products";
    const apiUrl2 =
      "https://travel-gide-server-nazmu957.vercel.app/categories";

    const [data1, data2] = await axios.all([
      axios.get(apiUrl1),
      axios.get(apiUrl2),
    ]);

    console.log(data1.data, data2.data);

    return {
      props: {
        allProducts: data1.data,
        allCategories: data2.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error as needed
    return {
      props: {
        allProducts: [],
        allCategories: [],
      },
      revalidate: 10,
    };
  }
};

// export const getStaticProps = async () => {
//   const res = await fetch("https://travel-gide-server-nazmu957.vercel.app/products");
//   // const res = await fetch("http://localhost:3000/api/products");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       allProducts: data,
//     },
//     revalidate: 10,
//   };
// };

import { Helmet } from "react-helmet";

export default function HomePharmacy() {
  return (
    <>
      <Helmet>
        <title>Pharmacy Home</title>
        <meta
          name="description"
          content="Welcome to our online pharmacy. Find and order medicines with ease."
        />
        <meta
          name="keywords"
          content="pharmacy, medicine, healthcare, prescription, drugs, online pharmacy"
        />
      </Helmet>
      <div>HomePharmacy</div>
    </>
  );
}

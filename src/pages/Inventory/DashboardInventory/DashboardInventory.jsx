import { Helmet } from "react-helmet";

export default function DashboardInventory() {
  return (
    <>
      <Helmet>
        <title>Inventory Dashboard</title>
        <meta
          name="description"
          content="Admin panel for managing inventory, tracking stock, and handling warehouse operations."
        />
        <meta
          name="keywords"
          content="inventory, dashboard, stock management"
        />
        <meta property="og:title" content="Inventory Dashboard" />
        <meta
          property="og:description"
          content="Manage and track your inventory with ease."
        />
      </Helmet>

      <div>Inventory Dashboard</div>
    </>
  );
}

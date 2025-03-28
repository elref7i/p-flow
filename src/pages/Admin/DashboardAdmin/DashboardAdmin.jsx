import { Helmet } from "react-helmet";

export default function DashboardAdmin() {
  return (
    <>
      <Helmet>
        <title>Dashboard Admin</title>
        <meta
          name="description"
          content="Admin panel to manage users, settings, and analytics."
        />
        <meta
          name="keywords"
          content="admin, dashboard, management, users, settings, analytics"
        />
      </Helmet>

      <div>DashboardAdmin</div>
    </>
  );
}

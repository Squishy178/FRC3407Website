import Layout from "../../components/layout";
import type { IAuthOptions } from "../../types/component";

const auth: IAuthOptions = {
  accessLevel: "admin",
};

function AdminPage() {
  return (
    <Layout title="Admin Dashboard">
      <div>
        <h1>Admin Dashboard</h1>
      </div>
    </Layout>
  );
}

AdminPage.auth = auth;

export default AdminPage;
export const adminAuth = auth;

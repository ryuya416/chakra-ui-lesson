import { UserManagement } from "../../components/pages/UserManagement";
import { HeaderLayout } from "../../components/templates/HeaderLayout";

const Home = () => {
  return (
    <HeaderLayout>
      <UserManagement />
    </HeaderLayout>
  );
};

export default Home;

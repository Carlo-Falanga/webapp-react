import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppLoader from '../components/AppLoader';
import { useGlobalContext } from "../components/GlobalContext";


export default function DefaultLayout() {
  const { isLoading } = useGlobalContext();
  return (
    <>
      <AppHeader />
      <main className='min-vh-100'>
        {/* Loader component here */}
        {isLoading && <AppLoader/>}
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}

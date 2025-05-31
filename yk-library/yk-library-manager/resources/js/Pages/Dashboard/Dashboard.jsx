import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import "../../../css/app.css";
import Title from '@/Components/Title';
import Footer from '@/Components/Footer';
import Header from './Partials/Header';
import Index from '../Services/Index';
export default function Dashboard({ auth }) {

    return (
        <AuthenticatedLayout auth={auth}>
            <Title titre="Accueil" />
            <Header auth={auth} />

            <div className='2xl:mt-8'>
                 <Footer className='fixed bottom-0'/>
             </div>
             <div>
                
             </div>
        </AuthenticatedLayout>
    );
}

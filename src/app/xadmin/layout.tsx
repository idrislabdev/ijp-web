import '@/styles/xadmin.css'
import '@/styles/components/main-sidebar.css'
import '@/styles/components/table.css'
import '@/styles/components/tab.css'
import 'rsuite/useToaster/styles/index.css';
import 'rsuite/Message/styles/index.css';
import 'rsuite/TagInput/styles/index.css';
import 'rsuite/Tag/styles/index.css';
import 'rsuite/TagGroup/styles/index.css';
import 'rsuite/TagPicker/styles/index.css';

const AdminLayout = ({ children, params }: {children : React.ReactNode, params: any}) => {
    return (
        <>
            { children }
        </>
    )
  }
  
  export default AdminLayout

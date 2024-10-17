import MainSidebar from "@/@core/components/main-sidebar";
import { ArchieveOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, UndoOutlineIcon} from "@/@core/my-icons";
import JobsPageForm from "@/@core/page/xadmin/jobs/form";
import Link from "next/link";

export default function XadminJobsForm() {
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Home</li>
                <li><FolderIcon /> Address</li>
                <li><FolderOpenIcon /> City</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
          <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Jobs</h5>
                <p>Manajemen Lowongan Kerja</p>
              </div>
            </div>
            <div className='main-body'>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex justify-end">
                        <Link href={`/xadmin/jobs`} className="btn btn-outline-neutral"><UndoOutlineIcon />Back To</Link>
                    </div>
                    <JobsPageForm />
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

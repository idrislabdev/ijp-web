"use client"

import MainSidebar from "@/@core/components/main-sidebar";
import { ArchieveOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, UndoOutlineIcon} from "@/@core/my-icons";
import JobsPageForm from "@/@core/page/xadmin/jobs/form";
import dynamic from "next/dynamic";
import Link from "next/link";

const PostingNewsForm = dynamic(
  () => import('@/@core/page/xadmin/posting-news/form'),
  { ssr: false }
);

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
                <li><FolderIcon /> Posting Berita</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
          <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Posting Berita</h5>
                <p>Manajemen Data Berita</p>
              </div>
            </div>
            <div className='main-body'>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex justify-end">
                        <Link href={`/xadmin/posting-news`} className="btn btn-outline-neutral"><UndoOutlineIcon />Back To</Link>
                    </div>
                    <PostingNewsForm />
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import CaseForm from '@/components/CaseForm'
import SideBar from '@/components/Sidebar'

const reportCase = () => {
  return (
    <>
      <SideBar/>
      <div className="ml-20">
        <CaseForm/>
      </div>
    </>

  )
}

export default reportCase
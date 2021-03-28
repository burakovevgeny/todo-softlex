import Header from '../containers/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import TodoTable from '../containers/TodoTable'
import PaginationButtons from '../containers/PaginationButtons'
import SortWrapper from '../components/SortWrapper'
import InputTask from '../containers/InputTask'

export default function MainPage() {
  return (
    <>
      <Header />
      <Layout>
        <SortWrapper />
        <InputTask />
        <TodoTable />
        <PaginationButtons />
      </Layout>
      <Footer />
    </>
  )
}

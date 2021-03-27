import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import TodoTable from '../components/TodoTable'
import PaginationButtons from '../components/PaginationButtons'
import SortWrapper from '../components/Sort/SortWrapper'
import InputTask from '../components/InputTask'

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

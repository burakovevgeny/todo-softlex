import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../containers/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import TodoTable from '../containers/TodoTable'
import PaginationButtons from '../containers/PaginationButtons'
import SortWrapper from '../components/SortWrapper'
import InputTask from '../containers/InputTask'
import LoadingSpinner from '../components/LoadingSpinner'
import { getDatabase } from '../redux/reducers/database'

export default function MainPage() {
  const { isLoading } = useSelector((store) => store.database)
  const dispatch = useDispatch()

  useEffect(() => {
    const LOADING_DELAY = setTimeout(() => {
      dispatch(getDatabase())
    }, 500)
    return () => clearTimeout(LOADING_DELAY)
  }, [dispatch])

  function checkLoading() {
    return !isLoading ? (
      <Layout>
        <SortWrapper />
        <InputTask />
        <TodoTable />
        <PaginationButtons />
      </Layout>
    ) : (
      <Layout>
        <LoadingSpinner />
      </Layout>
    )
  }

  return (
    <>
      <Header />
      {checkLoading()}
      <Footer />
    </>
  )
}

import { useEffect, useState } from 'react'
import { Card } from '../../components/card'
import { Layout } from '../../components/layout'
import { Footer } from '../../components/footer'
import { MainMenu } from '../../components/main-menu'
import { handleToggle } from '@/helpers/handleToggle'

export default function Home() {
  const [data, setData] = useState({ status: 'loading', data: null })
  const [toggle, setToggle] = useState(0)
  const _handleToggle = (ins) => handleToggle(data, setToggle, toggle, ins)

  useEffect(() => {
    const handleFetch = () => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      }

      fetch(
        process.env.NEXT_PUBLIC_API + `/pokemon?offset=${toggle}&limit=20`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          setData({ status: 'success', data: JSON.parse(result) })
        })
        .catch((error) => {
          setData({ status: 'error', data: null })
        })
    }

    handleFetch()
  }, [toggle])

  return (
    <Layout>
      <button onClick={() => _handleToggle('prev')}>ini kurang</button>
      <button onClick={() => _handleToggle('next')}>ini tambah</button>
      {toggle}
      {data.status === 'loading' ? (
        <p>Loading</p>
      ) : data.status === 'success' ? (
        <MainMenu data={data.data} />
      ) : (
        <p>Gagal Mendapatkan Data</p>
      )}
      <Footer />
    </Layout>
  )
}

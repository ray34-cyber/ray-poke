const Detail = (props) => {
  const data = props.data
  //   console.log('props', data) //ini datanya
  return (
    <div>
      <p>Detail : {data.name}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API + `/pokemon/${context.query.index}/`
    )
    const data = await response.json()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    return {
      props: {
        data: null,
      },
    }
  }
}

export default Detail
